import Link from "next/link";
import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";

interface Props {
  activeSector: Sector;
  questionKey?: string;
}

const ArrowNav = ({ activeSector, questionKey }: Props) => {
  const sectors = Object.keys(data.sectors) as Sector[];
  const questionKeys = Object.keys(data.sectors[activeSector].questions);

  const questionKeyIndex = questionKeys.indexOf(questionKey);
  const activeSectorIndex = sectors.indexOf(activeSector);

  const firstSector = activeSectorIndex === 0;
  const lastSector = activeSectorIndex === sectors.length - 1;

  const firstSectorQuestion = questionKeyIndex === 0;
  const lastSectorQuestion = questionKeyIndex === questionKeys.length - 1;

  const first = questionKey ? firstSectorQuestion : firstSector;
  const last = questionKey ? lastSectorQuestion : lastSector;

  return (
    <div className="flex justify-between items-center">
      <div>
        {(() => {
          if (!first) {
            return (
              <Link
                href={`/${activeSector}/${questionKeys[questionKeyIndex - 1]}`}
              >
                <a className="block p-2 rounded-full border border-gray-300 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700">
                  <ArrowLeftIcon className="h-5 w-5" />
                </a>
              </Link>
            );
          } else if (first && !firstSector) {
            const previousSector = sectors[activeSectorIndex - 1];
            const firstQuestionKey = Object.keys(
              data.sectors[previousSector].questions
            ).at(0);
            return (
              <Link href={`/${previousSector}/${firstQuestionKey}`}>
                <a className="block p-2 rounded-full border border-transparent bg-gray-900 text-white">
                  <ArrowLeftIcon className="h-5 w-5" />
                </a>
              </Link>
            );
          }
        })()}
      </div>
      <div>
        {(() => {
          if (!last) {
            return (
              <Link
                href={`/${activeSector}/${questionKeys[questionKeyIndex + 1]}`}
              >
                <a className="block p-2 rounded-full border border-gray-300 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700">
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              </Link>
            );
          } else if (last && !lastSector) {
            const nextSector = sectors[activeSectorIndex + 1];
            const firstQuestionKey = Object.keys(
              data.sectors[nextSector].questions
            ).at(0);
            return (
              <Link href={`/${nextSector}/${firstQuestionKey}`}>
                <a className="block p-2 rounded-full border border-transparent bg-gray-900 text-white">
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              </Link>
            );
          } else if (last && lastSector) {
            return (
              <Link href={`/results`}>
                <a className="block p-2 rounded-full border border-transparent bg-gray-900 text-white">
                  <CheckIcon className="h-5 w-5" />
                </a>
              </Link>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default ArrowNav;
