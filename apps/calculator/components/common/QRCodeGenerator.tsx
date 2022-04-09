import Image from "next/image";
import React from "react";

// TODO: parse the users footprint and
// read it via the url: `/import?json={...}

//
const QRCodeGenerator = () => {
  return (
    <div className="relative w-24 h-24">
      <Image
        layout="fill"
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://precycle.today"
        alt=""
      />
    </div>
  );
};

export default QRCodeGenerator;
