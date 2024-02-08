export interface BoardItemProps {
  type: "writting" | "question";
  writtingItem?: { img: string; author: string; title: string };
  questionItem?: { number: number; question: string; answer: string };
}
export interface BoardItemUIProps {
  type: "writting" | "question";
  writtingItem?: { img: string; author: string; title: string };
  questionItem?: { number: number; question: string; answer: string };
  save: boolean;
  handleSaveClick: () => void;
}
