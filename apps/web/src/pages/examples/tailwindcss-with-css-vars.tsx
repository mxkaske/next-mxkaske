import Layout from "@/components/common/layout";
import { Heading, Link, Text, Label } from "ui";
import React from "react";

// utils start - copied from
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
// utils end

const TailwindCssVars = () => {
  const [color, setColor] = React.useState<string>(undefined);

  React.useLayoutEffect(() => {
    const style = getComputedStyle(document.body);
    const defaultValue = style.getPropertyValue("--example-brand");
    setColor(defaultValue);
  }, []);

  return (
    <Layout className="space-y-4">
      <div>
        <Heading as="h4">Tailwind with CSS variables</Heading>
        <Text className="text-gray-600 dark:text-gray-400">
          Choose the color you wish to see. The <code>--example-brand</code> css
          var will be updated via JavaScript.
        </Text>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="color-picker">Color Picker</Label>
          <input
            name="color-picker"
            id="color-picker"
            className="border border-gray-300 dark:border-gray-700 rounded"
            type="color"
            // TODO: defaultValue is missing
            onChange={(e) => {
              const { r, g, b } = hexToRgb(e.target.value);
              setColor(`${r} ${g} ${b}`);
              document.documentElement.style.setProperty(
                "--example-brand",
                `${r} ${g} ${b}`
              );
            }}
          />
        </div>
        <div className="border border-brand/10 -mx-6 p-6 my-6 rounded grid md:grid-cols-2 gap-6 items-center">
          <button className="border rounded px-3 py-2 border-brand/10 bg-brand/5 text-brand/90">
            Look at me!
          </button>
          <div className="text-sm">
            <code>{`:root { --example-brand: "${color}" }`}</code>
          </div>
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
