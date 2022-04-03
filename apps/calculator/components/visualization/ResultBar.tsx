import React from "react";
import { Text } from "ui";
import { data } from "../../config/data";
import useFootprint from "../../hooks/useFootprint";
import { Sector } from "../../types/schema";

interface Props {
  activeSector: Sector;
}

const ResultBar = ({ activeSector }: Props) => {
  const { calculate } = useFootprint();

  const total = calculate();

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <ul className="space-y-px">
        {Object.keys(data?.sectors).map((key: Sector) => {
          const value = calculate(key);
          const relValue = value / total;
          return (
            <li
              key={key}
              className="rounded w-2"
              style={{
                backgroundColor: data?.sectors[key].color,
                height: `${relValue * 12}em`,
              }}
            />
          );
        })}
      </ul>
      <ul>
        {Object.keys(data?.sectors).map((key: Sector) => {
          return (
            <li key={key} className="text-xs">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: data.sectors[key].color }}
              />
              {data.sectors[key].title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultBar;
