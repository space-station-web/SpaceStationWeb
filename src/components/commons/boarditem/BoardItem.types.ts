import { PostProps } from "../../units/mypage/Mypage.types";
import { QuestionProps } from "./../../units/mypage/Mypage.types";

export interface BoardItemProps {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: QuestionProps;
}
export interface BoardItemUIProps {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: QuestionProps;
  save: boolean;
  handleSaveClick: () => void;
}
