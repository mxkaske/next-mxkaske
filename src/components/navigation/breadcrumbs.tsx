import { useRouter } from "next/router";
import React from "react";
import Link from "@/components/ui/link";
import SlashIcon from "../icon/slash";

const Breadcrumbs = () => {
  const router = useRouter();
  const breadcrumbs = router.asPath.substring(1).split("/");

  return (
    <div className="flex">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb} className="flex items-center">
          <SlashIcon className="flex-shrink-0 w-5 h-5 text-gray-300" />
          <Link
            href={breadcrumbs.reduce(
              (prev, curr) =>
                prev.split("/").length <= index + 1
                  ? `${prev}/${curr}`
                  : `${prev}`,
              ""
            )}
            className="font-light line-clamp-1"
          >
            {breadcrumb}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
