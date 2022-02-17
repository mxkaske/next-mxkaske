import type { NextPage } from "next";
import { Input } from "ui";
import { model } from "../config/model";

const Home: NextPage = () => {
  const { question } = model.sector.transport;
  return (
    <div className="flex items-center justify-center min-h-screen">
      {Object.entries(model.sector.transport.question).map(([key, value]) => {
        return (
          <div key={key} className="px-2 py-1">
            {question[key].title}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
