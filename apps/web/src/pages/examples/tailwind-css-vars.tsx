import Layout from "@/components/common/layout";
import { Heading, Link, Text, Select } from "ui";
import React from "react";

// TODO: add prism?

const cssVars = {
  default: "155 0 0",
  primary: "0 155 0",
  secondary: "0 0 155",
};

const TailwindCssVars = () => {
  const [style, setStyle] = React.useState<keyof typeof cssVars>("default");

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--example-brand",
      cssVars[style]
    );
  }, [style]);

  return (
    <Layout className="space-y-4">
      <div>
        <Heading as="h4">Tailwind with CSS variables</Heading>
        <Text className="text-gray-600 dark:text-gray-400">
          Choose the variant you wish to see. The `--example-brand` will be
          updated via JavaScript.
        </Text>
      </div>
      <div>
        <Select
          value={style}
          onChange={(e) => setStyle(e.target.value as keyof typeof cssVars)}
        >
          <option value="default">default</option>
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
        </Select>
        <div className="bg-white -mx-6 p-6 my-6 rounded grid md:grid-cols-2 gap-6">
          <button className="border rounded px-3 py-2 border-brand/10 bg-brand/5 text-brand/90">
            Look at me!
          </button>
          <div></div>
        </div>
      </div>
      <Link
        href="https://github.com/mxkaske/next-mxkaske/tree/main/src/pages/examples/tailwind-css-vars.tsx"
        target="_blank"
      >
        GitHub file
      </Link>
    </Layout>
  );
};

export default TailwindCssVars;
