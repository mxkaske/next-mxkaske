import type { NextPage } from "next";
import NextLink from "next/link";
import { Link } from "ui";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <NextLink href="/transport">
        <Link>to /transport</Link>
      </NextLink>
    </div>
  );
};

export default Home;
