import { useState } from "react";
import BookWriteUI from "./BookWrite.presenter";

export default function BookWrite(): JSX.Element {
  // 책 POST 변수들
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);
  const [tableTitle, setTableTitle] = useState("");
  const [tableContents, setTableContents] = useState("");
  // ///////

  const [isToggle, setIsToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onClickCategory = (category: string): void => {
    setSelectedCategory(category);
  };

  const onClickToggle = (): void => {
    setIsToggle((prev) => !prev);
  };

  return (
    <BookWriteUI
      isToggle={isToggle}
      onClickToggle={onClickToggle}
      onClickCategory={onClickCategory}
      selectedCategory={selectedCategory}
    />
  );
}
