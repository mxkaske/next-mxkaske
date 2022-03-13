import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";

interface Props {
  activeSector: Sector;
}

const ArrowNav = ({ activeSector }: Props) => {
  const router = useRouter();
  const sectors = Object.keys(data.sectors) as Sector[];
  const activeSectorIndex = sectors.findIndex((s) => s === activeSector);

  const navigate = (index: number) => {
    router.push(`/${sectors[index]}`);
  };

  return (
    <div className="flex justify-between items-center">
      {/* TODO: create an icon-button */}
      {/* TODO: instead of button, use anchor */}
      {activeSectorIndex !== 0 ? (
        <button
          className="p-2 rounded-full border border-gray-300 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700"
          onClick={() => navigate(activeSectorIndex - 1)}
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
      ) : (
        <div />
      )}
      {activeSectorIndex !== sectors.length - 1 ? (
        <button
          className="p-2 rounded-full border border-gray-300 dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700"
          onClick={() => navigate(activeSectorIndex + 1)}
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default ArrowNav;
