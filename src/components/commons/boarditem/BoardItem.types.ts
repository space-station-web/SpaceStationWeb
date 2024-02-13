import { PostProps } from "../../units/mypage/Mypage.types";

export interface BoardItemProps {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: { number: number; question: string; answer: string };
}
export interface BoardItemUIProps {
  type: "writting" | "question";
  writtingItem?: PostProps;
  questionItem?: { number: number; question: string; answer: string };
  save: boolean;
  handleSaveClick: () => void;
}
