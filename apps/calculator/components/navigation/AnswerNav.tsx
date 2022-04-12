import React from "react";
import { Emoji } from "ui";
import { data } from "../../config/data";
import useActiveSector from "../../hooks/useActiveSector";
import { QuestionSelectOptions, Sector } from "../../types/schema";
import { isRadio } from "../../utils";
import Link from "next/link";

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
        .filter((_, i) => (answerIndex !== -1 ? i < answerIndex : true)) // answered questions until current
        // .filter((_, i) => i !== answerIndex) // answered question exept current
        .map((key) => {
          const question = questions[key];
          const answer = sector[key];
          let selected: QuestionSelectOptions[string];
          if (isRadio(question)) {
            selected = question.options[answer as string];
          }
          return (
            <Link key={key} href={`/${activeSector}/${key}`}>
              <a className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-1 px-2 rounded-full mr-1 mb-1 text-xs">
                {questions[key].label}
                {selected ? (
                  <Emoji className="ml-1" label={selected.label}>
                    {selected.emoji}
                  </Emoji>
                ) : null}
              </a>
            </Link>
          );
        })}
    </div>
  );
};

export default AnswerNav;
