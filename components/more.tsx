import React from "react";

const more: { label: string; href: string }[] = [
  {
    label: "Circulate Microsite",
    href: "https://plastikneutral.circulate.global/",
  },
  {
    label: "Pneumobörse",
    href: "https://zukunft.pneumologie.de/",
  },
];

const More = () => {
  return (
    <div className="flex flex-col w-full md:w-(1/2-8) m-4 rounded-xl p-4 hover:shadow-xl md:text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2>Web Projects</h2>
        {more.map(({ label, href }, index) => (
          <a
            key={index}
            className="block mb-2"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default More;
