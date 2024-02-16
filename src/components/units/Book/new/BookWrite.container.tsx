import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import BookWriteUI from "./BookWrite.presenter";
import type { TableContent } from "./BookWrite.types";

export default function BookWrite(): JSX.Element {
  // 책 POST 변수들
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [tableContents, setTableContents] = useState<TableContent[]>([]);
  const [bookContents, setBookContents] = useState<
    Array<{ index: number; title: string; context: string }>
  >([]); // 요청 파라미터
  // const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // useEffect(() => {
  //   // 클라이언트 사이드에서만 실행되도록 함
  //   if (typeof window !== "undefined") {
  //     const storedAccessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  //     const storedRefreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);
  //     setAccessToken(storedAccessToken);
  //     setRefreshToken(storedRefreshToken);
  //   }
  // }, []);

  useEffect(() => {
    const newBookContents = tableContents.map((item, index) => ({
      index: index + 1,
      title: item.title,
      context: item.content, // 'content'가 'context'로 매핑되어야 한다고 가정
    }));
    setBookContents(newBookContents);
  }, [tableContents]);

  const handleAddTableContent = (
    title: string,
    content: string,
    images?: string[] | undefined,
  ): void => {
    setTableContents([...tableContents, { title, content, images }]);
  };

  // 항목 삭제
  const handleRemoveTableContent = (indexToRemove: number): void => {
    setTableContents(
      tableContents.filter((_, index) => index !== indexToRemove),
    );
  };

  // 책 내용 상태 관리
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };
  const onChangeIntro = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setIntro(event.currentTarget.value);
  };

  const [isToggle, setIsToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onClickCategory = (category: string): void => {
    setSelectedCategory(category);
  };

  const onClickToggle = (): void => {
    setIsToggle((prev) => !prev);
  };

  const accessToken =
    "Bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwODA4MDM4NCwiZXhwIjoxNzA4MDkxMTg0fQ.B320pI89F6ADXXx_y75j7LMhgdpzTSYOb9oIn-CLZtY";
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgwODAzODQsImV4cCI6MTcwODE2Njc4NH0.YvlFz-QJArPkFKAXdHh-144M8RXV_nYK9Uw6Whiq4YI";

  // API 요청 함수
  const onClickSubmitBook = async (): Promise<void> => {
    // if (!accessToken || !refreshToken) {
    //   alert("인증 토큰이 없습니다. 다시 로그인해 주세요.");
    //   return;
    // }

    try {
      // const authHeader = `Bearer ${accessToken}`;

      const response = await axios.post(
        "http://localhost:8080/books",

        {
          title,
          intro,
          category: selectedCategory,
          thumbnail: "123",
        },
        {
          headers: {
            authorization: accessToken,
            refresh: refreshToken,
          },
        },
      );
      console.log(bookContents);
      console.log(response.data); // 응답 데이터 처리
      // 요청 성공 후 작업 (예: 페이지 이동, 상태 업데이트)
    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  return (
    <BookWriteUI
      isToggle={isToggle}
      onClickToggle={onClickToggle}
      onClickCategory={onClickCategory}
      selectedCategory={selectedCategory}
      tableContents={tableContents}
      handleRemoveTableContent={handleRemoveTableContent}
      handleAddTableContent={handleAddTableContent}
      onChangeTitle={onChangeTitle}
      onChangeIntro={onChangeIntro}
      onClickSubmitBook={onClickSubmitBook}
    />
  );
}
