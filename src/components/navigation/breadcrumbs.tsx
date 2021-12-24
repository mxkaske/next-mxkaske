import { useRouter } from "next/router";
import React from "react";
import Link from "@/components/ui/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const breadcrumbs = router.asPath.substring(1).split("/");

  return (
    <div className="flex">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb} className="flex items-center">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
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
