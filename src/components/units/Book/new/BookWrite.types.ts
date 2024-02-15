import type { ChangeEvent, MouseEvent } from "react";

export interface IBookWriteProps {
  isToggle: boolean;
  selectedCategory: string | null;
  onClickToggle: (event: MouseEvent<HTMLDivElement>) => void;
  // onClickCategory: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClickCategory: (category: string) => void;

  tableContents: TableContent[];
  handleRemoveTableContent: (indexToRemove: number) => void;
  handleAddTableContent: (
    title: string,
    content: string,
    images?: string[] | undefined,
  ) => void;

  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeIntro: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitBook: () => Promise<void>;
}

export interface TableContent {
  title: string;
  content: string;
  images?: string[] | undefined;
}
