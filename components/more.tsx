import React from "react";

const More = () => {
  return (
    <div className="flex flex-col w-full md:w-(1/2-8) m-4 rounded-xl p-4 hover:shadow-xl md:text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2>web projects</h2>
        <a
          className="block"
          href="https://plastikneutral.circulate.global/"
          target="_blank"
        >
          Circulate Microsite
        </a>
        <a
          className="block"
          href="https://zukunft.pneumologie.de/"
          target="_blank"
        >
          Pneumobörse
        </a>
      </div>
    </div>
  );
};

export default More;
