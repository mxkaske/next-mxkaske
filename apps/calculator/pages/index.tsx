import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input, Select, Loading, Range } from "ui";
import { useLocalStorage } from "usehooks-ts";
import { model } from "../config/model";
import { QuestionInput, QuestionRange, QuestionSelect } from "../types/schema";

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
      <Link href="/transport">
        <a>to /transport</a>
      </Link>
    </div>
  );
};

export default Home;
