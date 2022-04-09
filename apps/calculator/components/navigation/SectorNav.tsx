import React, { useEffect, useLayoutEffect, useRef } from "react";
import NextLink from "next/link";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import { Emoji, Link } from "ui";
import cn from "classnames";
import { useRouter } from "next/router";

interface Props {
  activeSector?: Sector;
  className?: string;
}

// TODO: clarify whether or not to pass activeSector...

const SectorNav = ({ activeSector, className }: Props) => {
  const router = useRouter();
  const ref = useRef<HTMLUListElement>();

  useLayoutEffect(() => {
    if (ref.current && activeSector) {
      const e = document.getElementById(activeSector);
      const p = e?.getBoundingClientRect();
      console.log(p);
      ref.current.scrollLeft += 100;
    }
  }, [router, activeSector]);

  return (
    <nav className={cn("w-full", className)}>
      <ul
        ref={ref}
        className="flex overflow-x-auto space-x-2 py-4 px-2 snap-x snap-mandatory"
      >
        {Object.entries(data.sectors).map(([key, value]) => {
          const isActive = key === activeSector || key === router.query?.sector;
          const firstQuestionKey = Object.keys(value.questions)[0];
          return (
            <li key={key} id={key} className="snap-start scroll-mx-3 shrink-0">
              <NextLink href={`/${key}/${firstQuestionKey}`} passHref>
                <a
                  className={cn(
                    "px-3 py-2 rounded-full",
                    isActive
                      ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                      : "bg-white dark:bg-gray-900 hover:bg-gray-100 hover:dark:bg-gray-900"
                  )}
                >
                  {value.title}
                  <Emoji label={value.title} className="ml-2">
                    {value.emoji}
                  </Emoji>
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectorNav;
