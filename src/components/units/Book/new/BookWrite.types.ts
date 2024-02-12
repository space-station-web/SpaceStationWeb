import type { MouseEvent } from "react";

export interface IBookWriteProps {
  isToggle: boolean;
  selectedCategory: string | null;
  onClickToggle: (event: MouseEvent<HTMLDivElement>) => void;
  // onClickCategory: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClickCategory: (category: string) => void;
}
