import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Select from "../ui/select";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  } else {
    return (
      <Select
        onChange={(e) => setTheme(e.target.value)}
        defaultValue={theme}
        className="focus:ring-0"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="system">System</option>
      </Select>
    );
  }
};

export default ThemeSwitch;
