import { Heading, Text, Label } from "ui";
import React from "react";

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

const VariableColorPicker = () => {
  const [color, setColor] = React.useState<string>(undefined);

  React.useEffect(() => {
    const style = getComputedStyle(document.body);
    const defaultValue = style.getPropertyValue("--example-brand");
    setColor(defaultValue);
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="color-picker">Color Picker</Label>
        <input
          name="color-picker"
          id="color-picker"
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
      <div className="border border-brand/10 -mx-6 p-6 my-6 rounded grid md:grid-cols-3 gap-6 items-center">
        <button className="md:col-span-1 border rounded px-3 py-2 border-brand/10 bg-brand/5 text-brand/90">
          Look at me!
        </button>
        <div className="text-sm md:col-span-2">
          <code>{`:root { --example-brand: "${color}" }`}</code>
        </div>
      </div>
    </div>
  );
};

export default VariableColorPicker;
