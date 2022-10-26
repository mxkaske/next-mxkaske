import Layout from "@/components/common/layout";
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Heading, Text } from "ui";
import Link from "@/components/ui/link";
import cn from "classnames";

const styles = {
  base: "absolute rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob",
  variant: {
    "1": "top-12 -left-12 bg-purple-300",
    "2": "top-12 -right-12 bg-yellow-300 animation-delay-2000",
    "3": "bottom-12 -left-12 bg-pink-300 animation-delay-4000",
    "4": "bottom-12 -right-12 bg-sky-300 animation-delay-6000",
  },
};

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const getSize = () => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setSize({ width, height });
    }
  };

  useLayoutEffect(() => {
    getSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);

  const maxVal = Math.max(size.width, size.height);

  const style = {
    width: maxVal * 0.8,
    height: maxVal * 0.8,
  };

  return (
    <div
      ref={ref}
      className="relative p-[2px] overflow-hidden rounded-md transform-gpu"
    >
      <div className="absolute inset-0">
        <div className="relative h-full w-full z-[-10]">
          {Object.keys(styles.variant).map((i) => (
            <div
              key={i}
              className={cn(styles.base, styles.variant[i])}
              style={style}
            />
          ))}
        </div>
      </div>
      <div
        className={cn(
          "rounded-md bg-gray-50 dark:bg-gray-800 opacity-70 w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

const BlurCardPage = () => {
  return (
    <Layout className="space-y-4">
      <div>
        <Heading as="h4">
          Blurry moving background done with Tailwind CSS
        </Heading>
        <Text className="text-gray-600 dark:text-gray-400">
          The idea came after watching{" "}
          <Link
            href="https://twitter.com/simonswiss"
            target="_blank"
            rel="noreferrer"
          >
            @simonswiss
          </Link>{" "}
          YouTube videos about{" "}
          <Link
            href="https://www.youtube.com/watch?v=Tmkr2kKUEgU&t=453s"
            target="_blank"
            rel="noreferrer"
          >
            Building Blurry, Animated Background Shapes with Tailwind CSS
          </Link>
        </Text>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="https://play.tailwindcss.com/KxPC8YrvrI"
          target="_blank"
          rel="noreferrer"
        >
          <Card className="p-2">
            <Heading>Playground</Heading>
            <Text>Check out the browser playground from Tailwind CSS.</Text>
          </Card>
        </a>
        <a
          href="https://github/mxkaske/next-mxkaske/apps/web/src/pages/examples/blur-card.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <Card className="p-2">
            <Heading>Source Code</Heading>
            <Text>Choose going into the source code on GitHub.</Text>
          </Card>
        </a>
      </div>
      <Text className="text-gray-600 dark:text-gray-400">
        Do not forget the translate-gpu classname!
      </Text>
    </Layout>
  );
};

export default BlurCardPage;
