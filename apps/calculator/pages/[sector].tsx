import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { Input, Loading, Range, Select } from "ui";
import { useLocalStorage } from "usehooks-ts";
import { model } from "../config/model";
import { SectorProps } from "../types/model";
import { QuestionInput, QuestionRange, QuestionSelect } from "../types/schema";

const Sector = ({
  sector,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useLocalStorage<Record<string, string>>("form", {}); // type

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  const { question } = model.sector[sector] as SectorProps;

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
            case "range": {
              const q = value as QuestionRange;
              return (
                <Range
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

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ sector: string }>
) => {
  return {
    notFound: !model.sector[ctx.params?.sector],
    props: { sector: ctx.params?.sector },
  };
};

export default Sector;
