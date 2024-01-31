import { useState } from "react";
import SearchUI from "./Search.presenter";

export default function Search(): JSX.Element {
  const [isTitleApply, setIsTitleApply] = useState(false);
  const [isAuthorApply, setIsAuthorApply] = useState(false);

  const onClickTitleFilter = (): void => {
    setIsTitleApply((prev) => !prev);
  };

  const onClickAuthorFilter = (): void => {
    setIsAuthorApply((prev) => !prev);
  };

  return (
    <SearchUI
      onClickTitleFilter={onClickTitleFilter}
      onClickAuthorFilter={onClickAuthorFilter}
      isTitleApply={isTitleApply}
      isAuthorApply={isAuthorApply}
    />
  );
}
