import type { ChangeEvent, MouseEvent } from "react";
import React from "react";

export interface ISearchProps {
  onClickTitleFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAuthorFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  searchFilter: string;
  searchingItem: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.KeyboardEvent<HTMLElement>) => void;
}
