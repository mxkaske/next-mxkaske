import React from "react";
import { data } from "../../config/data";
import { Sector } from "../../types/schema";
import ArrowAnchor from "../ui/ArrowAnchor";

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
              <ArrowAnchor
                href={`/${activeSector}/${questionKeys[questionKeyIndex - 1]}`}
                dir="left"
              />
            );
          } else if (first && !firstSector) {
            const previousSector = sectors[activeSectorIndex - 1];
            const firstQuestionKey = Object.keys(
              data.sectors[previousSector].questions
            ).at(0);
            return (
              <ArrowAnchor
                href={`/${previousSector}/${firstQuestionKey}`}
                variant="invert"
                dir="left"
              />
            );
          }
        })()}
      </div>
      <div>
        {(() => {
          if (!last) {
            return (
              <ArrowAnchor
                href={`/${activeSector}/${questionKeys[questionKeyIndex + 1]}`}
              />
            );
          } else if (last && !lastSector) {
            const nextSector = sectors[activeSectorIndex + 1];
            const firstQuestionKey = Object.keys(
              data.sectors[nextSector].questions
            ).at(0);
            return (
              <ArrowAnchor
                href={`/${nextSector}/${firstQuestionKey}`}
                variant="invert"
              />
            );
          } else if (last && lastSector) {
            return (
              <ArrowAnchor href={`/results`} variant="invert" dir="done" />
            );
          }
        })()}
      </div>
    </div>
  );
};

export default ArrowNav;
