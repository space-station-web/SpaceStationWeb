import axios from "axios";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import BookWriteUI from "./BookWrite.presenter";
import type { TableContent } from "./BookWrite.types";

export default function BookWrite(): JSX.Element {
  // 책 POST 변수들
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [tableContents, setTableContents] = useState<TableContent[]>([]);
  const [, setBookContents] = useState<
    Array<{ index: number; title: string; context: string }>
  >([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  // 썸네일
  const [coverImageUrl, setCoverImageUrl] = useState("/book/coverAdd.png"); // 커버 이미지 URL 상태

  const coverImageRef = useRef<HTMLInputElement>(null);
  const formData = new FormData(); // 이 부분을 onClickSubmitBook으로 옮겼으므로 여기서는 제거

  // 파일 입력 핸들러
  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files === null) {
      return; // files가 null이면 여기서 함수를 종료합니다.
    }
    // 파일이 존재하지 않을 경우 null을 반환하도록 수정
    const file = event.target.files[0];

    setThumbnail(file); // 이제 file은 File 또는 null이며, 이는 setThumbnail 함수의 타입 요구사항과 일치합니다.

    // 파일이 선택되었을 때만 FileReader를 통해 파일을 읽습니다.
    if (file !== null) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setCoverImageUrl(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = (): void => {
    coverImageRef.current?.click(); // 파일 입력 참조를 사용하여 클릭 이벤트를 프로그래매틱하게 발생시킵니다.
  };

  // 요청 파라미터
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwODEwMDM2NCwiZXhwIjoxNzA4MTExMTY0fQ.F16wPwTFYGIt3X5XXoltp1JPufpUuSCfF6bS3hrJwQI";
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxMDAzNjQsImV4cCI6MTcwODE4Njc2NH0.5KHm2gFgEqaL-7sKqSeX_LDiPPY5DG3v_lQoxDpl3aw";

  // API 요청 함수
  const onClickSubmitBook = async (): Promise<void> => {
    formData.append("title", title);
    formData.append("intro", intro);
    if (selectedCategory !== null) {
      formData.append("category", selectedCategory);
    }

    if (thumbnail !== null) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      // const authHeader = `Bearer ${accessToken}`;
      const response = await axios.post(
        "http://localhost:8080/books",
        formData,
        {
          headers: {
            authorization: accessToken,
            refresh: refreshToken,
          },
        },
      );

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
      handleCoverImageChange={handleCoverImageChange}
      handleFileInputClick={handleFileInputClick}
      coverImageUrl={coverImageUrl}
      coverImageRef={coverImageRef}
    />
  );
}
