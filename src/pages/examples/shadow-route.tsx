import Layout from "@/components/common/layout";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Link from "@/components/ui/link";
import Select from "@/components/ui/select";
import Text from "@/components/ui/text";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ShadowRoute = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  return (
    <Layout className="space-y-4">
      <div>
        <Heading as="h4">
          Shadow route with pathname query as state management
        </Heading>
        <Text className="text-gray-600 dark:text-gray-400">
          The car state is stored in the `router.query.car` state while the
          counter is stored in the `useState`.
        </Text>
      </div>
      <div>
        <Select
          value={router.query.car || "empty"}
          onChange={(e) =>
            router.push(`?car=${e.target.value}`, undefined, {
              shallow: true,
            })
          }
        >
          <option value="empty" disabled>
            Select a car
          </option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
        </Select>
        <Button
          className="block mt-3"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Count: {counter}
        </Button>
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

export default ShadowRoute;
