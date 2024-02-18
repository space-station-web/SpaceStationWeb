import { HTMLAttributes } from "react";
import { PostProps, QuestionProps } from "../../units/mypage/Mypage.types";

export interface BoardItemProps extends HTMLAttributes<HTMLDivElement> {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: QuestionProps;
}
export interface BoardItemUIProps extends HTMLAttributes<HTMLDivElement> {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: QuestionProps;
  save: boolean;
  handleSaveClick: () => void;
}
