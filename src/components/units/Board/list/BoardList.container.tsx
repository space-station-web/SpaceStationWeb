import { useState } from "react";
import BoardListUI from "./BoardList.presenter";

export default function BoardList(): JSX.Element {
  
  // 게시물 저장 관련
  const [savedPosts, setSavedPosts] = useState<Record<number, boolean>>({});

  const onClickSave = (number:number) => () => {
    setSavedPosts((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  return <BoardListUI onClickSave={onClickSave} savedPosts={savedPosts} />;
}
