"use client"; // You won't get an error if missing - but can't usePathname

import { usePathname } from "next/navigation";
import React from "react";
import Link from "@/components/ui/link";
import SlashIcon from "../icon/slash";
import cn from "classnames";

const Breadcrumbs = () => {
  // REMEMBER: router is used for /pages components while migrating...
  // const router = useRouter();
  // const bc = router.asPath.split("?")[0].substring(1).split("/");
  // wrong TS definition in usePathname, can be null
  const pathname: string | null = usePathname();
  const breadcrumbs: string[] | undefined = pathname?.substring(1).split("/");
  return (
    <div className="flex">
      {breadcrumbs?.map((breadcrumb, index) => {
        const href = breadcrumbs.reduce(
          (prev, curr) =>
            prev.split("/").length <= index + 1 ? `${prev}/${curr}` : `${prev}`,
          ""
        );
        return (
          <div key={breadcrumb} className={cn("flex items-center")}>
            <SlashIcon className="flex-shrink-0 w-5 h-5 text-gray-300" />
            <div className="font-light line-clamp-1">
              <span className="relative">
                <Link href={href}>{breadcrumb}</Link>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
