import React from "react";
import { data } from "../../config/data";
import useActiveSector from "../../hooks/useActiveSector";
import { Sector } from "../../types/schema";

interface Props {
  activeSector: Sector;
  questionKey: string;
}

const AnswerNav = ({ activeSector, questionKey }: Props) => {
  const { sector } = useActiveSector();
  const answerKeys = Object.keys(sector);
  const answerIndex = answerKeys.indexOf(questionKey);
  const { questions } = data.sectors[activeSector];
  return (
    <div className="flex flex-wrap">
      {answerKeys
        .filter((_, i) => (answerIndex !== -1 ? i < answerIndex : true))
        .map((key) => (
          <div
            key={key}
            className="bg-gray-900 text-white py-1 px-2 rounded-full mr-1 mb-1 text-xs"
          >
            {questions[key].label}
          </div>
        ))}
    </div>
  );
};

export default AnswerNav;
