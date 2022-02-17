import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Input, Select, Loading } from "ui";
import { useLocalStorage } from "usehooks-ts";
import { model } from "../config/model";
import { QuestionInput, QuestionSelect } from "../types/schema";

const { question } = model.sector.transport;

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useLocalStorage<Record<string, string>>("form", {}); // type

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-4">
        {Object.entries(question).map(([key, value]) => {
          const defaultValue = form[key];
          switch (value.type) {
            case "select": {
              const q = value as QuestionSelect;
              return (
                <Select
                  key={key}
                  defaultValue={defaultValue}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                >
                  {Object.entries(q.options).map(([k, o]) => {
                    return (
                      <option key={k} id={k} value={k}>
                        {o.label}
                      </option>
                    );
                  })}
                </Select>
              );
            }
            case "input": {
              const q = value as QuestionInput;
              return (
                <Input
                  key={key}
                  defaultValue={defaultValue}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                />
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
