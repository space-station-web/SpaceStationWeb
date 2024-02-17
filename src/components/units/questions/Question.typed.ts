import type { ChangeEvent, MouseEvent } from "react";

export interface IQuestionUIProps {
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

  questionTitle: string;
}
