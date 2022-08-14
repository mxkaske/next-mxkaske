import { QuestionWithValue } from "../types/schema";
import { isCheckbox, isInput, isRadio, isRange, isSelect } from "./narrowing";

export const questionToNumber = (question: QuestionWithValue) => {
  if (isSelect(question)) {
    const { value, options } = question;
    return options[value].value;
  } else if (isInput(question)) {
    return Number(question.value); // make sure it is a number
  } else if (isRadio(question)) {
    const { value, options } = question;
    return options[value].value;
  } else if (isRange(question)) {
    return Number(question.value);
  } else if (isCheckbox(question)) {
    const { value, options } = question;
    const sum = Object.keys(options).reduce((prev, curr) => {
      return value.includes(curr) ? options[curr].value : 0;
    }, 0);
    return sum;
  }
};
