import { useRouter } from "next/router";
import React from "react";
import Link from "@/components/ui/link";
import SlashIcon from "../icon/slash";
import cn from "classnames";

// localhost:3000/examples/shadow-route?name=hello
// .asPath ~ /examples/shadow-route?name=hello
// .pathname ~ /examples/[slug]
// .query ~ { name: "hello", slug: "how-to-..." }

const Breadcrumbs = () => {
  const router = useRouter();
  const breadcrumbs = router.asPath.split("?")[0].substring(1).split("/");
  // slug of a page will be included inside router.query...
  const queryEntries = Object.entries(router.query).filter(
    ([_, value]) => !breadcrumbs.includes(value as string)
  );

  return (
    <div className="flex">
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <div key={breadcrumb} className={cn("flex items-center")}>
            <SlashIcon className="flex-shrink-0 w-5 h-5 text-gray-300" />
            <div className="font-light line-clamp-1">
              <span className="relative">
                <Link
                  href={breadcrumbs.reduce(
                    (prev, curr) =>
                      prev.split("/").length <= index + 1
                        ? `${prev}/${curr}`
                        : `${prev}`,
                    ""
                  )}
                  className={cn(
                    isLast &&
                      // 8.89px*16.45px is the canva of the slash icon - hypothenuse is ~19px
                      "before:h-px before:w-[19px] before:bg-gray-700 dark:before:bg-gray-300 before:absolute before:-bottom-0 before:-translate-x-1/2 before:left-1/2"
                  )}
                >
                  {breadcrumb}
                </Link>
              </span>
              {isLast && queryEntries.length > 0 ? (
                <span className="px-1 italic">
                  ?{" "}
                  {queryEntries.map(([key, value], idx) => {
                    const isNotFirst = idx !== queryEntries.length && idx !== 0;
                    return (
                      <React.Fragment key={key}>
                        {isNotFirst && <span className="font-light">&</span>}
                        <span className="px-1 font-extralight">{`${key}: ${value}`}</span>
                      </React.Fragment>
                    );
                  })}
                </span>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
