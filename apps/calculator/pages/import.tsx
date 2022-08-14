import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { Link, Text } from "ui";
import ActionBar from "../components/common/ActionBar";
import Layout from "../components/common/Layout";
import useFootprint from "../hooks/useFootprint";
import { UserFootprint } from "../types/model";

const Import = () => {
  const [status, setStatus] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const router = useRouter();
  const { setFootprint } = useFootprint();

  useEffect(() => {
    if (router.isReady) {
      const { footprint } = router.query;
      if (typeof footprint === "string") {
        try {
          const json = JSON.parse(footprint) as UserFootprint;
          setFootprint(json);
          setStatus("success");
        } catch {
          setStatus("error");
        }
      } else {
        setStatus("error");
      }
    }
  }, [router, setFootprint]);

  return (
    <Layout>
      <div className="flex flex-col flex-1 justify-center">
        {(() => {
          switch (status) {
            case "loading":
              return <Text>Loading...</Text>;
            case "error":
              return <Text>Something went wrong.</Text>;
            case "success":
              return (
                <>
                  <Text>Hurray, your footprint has been imported.</Text>
                  <NextLink href="/results" passHref>
                    <Link>Go to results</Link>
                  </NextLink>
                </>
              );
          }
        })()}
      </div>
      <ActionBar />
    </Layout>
  );
};

export default Import;
