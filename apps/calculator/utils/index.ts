import {
  Question,
  QuestionInput,
  QuestionRange,
  QuestionSelect,
} from "../types/schema";

export const isInput = (question: Question): question is QuestionInput => {
  return question.type === "input";
};

export const isSelect = (question: Question): question is QuestionSelect => {
  return question.type === "select";
};

export const isRange = (question: Question): question is QuestionRange => {
  return question.type === "range";
};
