import Layout from "@/components/common/layout";
import { default as NextLink } from "next/link";
import { Heading, Link, Text, Select } from "ui";
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
          `undefined`, it will show the select a subject option.
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
        href="https://github.com/mxkaske/next-mxkaske/tree/main/src/pages/examples/shadow-route.tsx"
        target="_blank"
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
