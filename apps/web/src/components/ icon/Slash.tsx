import React from "react";

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const SlashIcon = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
      {...props}
    >
      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
    </svg>
  );
};

export default SlashIcon;
