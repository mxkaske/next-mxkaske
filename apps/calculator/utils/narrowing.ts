import {
  Question,
  QuestionInput,
  QuestionRange,
  QuestionSelect,
  QuestionRadio,
  QuestionCheckbox,
} from "../types/schema";

// README: is[Select] will return a narrowed type
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

export const isInput = (question: Question): question is QuestionInput => {
  return question.type === "input";
};

export const isSelect = (question: Question): question is QuestionSelect => {
  return question.type === "select";
};

export const isRadio = (question: Question): question is QuestionRadio => {
  return question.type === "radio";
};

export const isRange = (question: Question): question is QuestionRange => {
  return question.type === "range";
};

export const isCheckbox = (
  question: Question
): question is QuestionCheckbox => {
  return question.type === "checkbox" || question.type === "checkbox-card";
};
