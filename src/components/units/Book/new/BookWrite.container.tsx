import { useState } from "react";
import BookWriteUI from "./BookWrite.presenter";

export default function BookWrite(): JSX.Element {
  // 책 POST 변수들
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");

  // // 책 내용 상태 관리
  // const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setTitle(event.currentTarget.value);
  // };
  // const onChangeIntro = (event: ChangeEvent<HTMLTextAreaElement>): void => {
  //   setIntro(event.currentTarget.value);
  // };

  const [isToggle, setIsToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onClickCategory = (category: string): void => {
    setSelectedCategory(category);
    console.log(category);
  };

  const onClickToggle = (): void => {
    setIsToggle((prev) => !prev);
  };

  // // API 요청 함수
  // const submitBook = async (): Promise<void> => {
  //   try {
  //     const response = await axios.post(
  //       "API_ENDPOINT",
  //       {
  //         title,
  //         intro,
  //         category: selectedCategory,
  //         bookContents,
  //       },
  //       {
  //         headers: {
  //           authorization: "Bearer YOUR_ACCESS_TOKEN",
  //           refresh: "YOUR_REFRESH_TOKEN",
  //         },
  //       },
  //     );
  //     console.log(response.data); // 응답 데이터 처리
  //     // 요청 성공 후 작업 (예: 페이지 이동, 상태 업데이트)
  //   } catch (error) {
  //     console.error(error); // 에러 처리
  //   }
  // };

  return (
    <BookWriteUI
      isToggle={isToggle}
      onClickToggle={onClickToggle}
      onClickCategory={onClickCategory}
      selectedCategory={selectedCategory}
    />
  );
}
