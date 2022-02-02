import Layout from "@/components/common/layout";
import Heading from "@/components/ui/heading";
import Link from "@/components/ui/link";
import Select from "@/components/ui/select";
import Text from "@/components/ui/text";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";

const ShadowRoute = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  const router = useRouter();
  return (
    <Layout className="space-y-4">
      <div>
        <Heading as="h4">
          Shadow route with pathname query as state management
        </Heading>
        <Text className="text-gray-600 dark:text-gray-400">
          The subject state is stored in the `router.query.subject` state. If
          `undefined`, it will show the "Select a subject" option.
        </Text>
      </div>
      <div>
        <Select
          value={router.query.subject || "empty"}
          onChange={(e) =>
            router.replace(
              `/examples/shadow-route?subject=${e.target.value}`,
              undefined,
              {
                shallow: true,
              }
            )
          }
        >
          <option value="empty" disabled>
            Select a subject
          </option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="product">Product</option>
          <option value="Legal">Legal</option>
        </Select>
      </div>
      <Link
        target="_blank"
        href="https://github.com/mxkaske/next-mxkaske/tree/main/src/pages/examples/shadow-route.tsx"
      >
        GitHub file
      </Link>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log("getServerSideProps");
  return {
    props: {},
  };
};

export default ShadowRoute;
