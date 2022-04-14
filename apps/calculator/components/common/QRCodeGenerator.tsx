import Image from "next/image";
import React from "react";
import useFootprint from "../../hooks/useFootprint";

// TODO: parse the users footprint and
// read it via the url: `/import?json={...}

const localIP = "192.168.178.53";

const baseURL =
  process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : localIP;

const QRCodeGenerator = () => {
  const { footprint } = useFootprint();
  const stringifiedFootprint = JSON.stringify(footprint);
  const data = `http://${baseURL}:3001/import?footprint=${stringifiedFootprint}`;
  return (
    <div className="relative w-56 h-56">
      <Image
        layout="fill"
        src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${data}`}
        alt=""
      />
    </div>
  );
};

export default QRCodeGenerator;
