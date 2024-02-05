import type { MouseEvent } from "react";

export interface ISearchProps {
  onClickTitleFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAuthorFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  isTitleApply: boolean;
  isAuthorApply: boolean;
}
