import axios from "axios";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  // 썸네일
  const [coverImageUrl, setCoverImageUrl] = useState("/book/coverAdd.png"); // 커버 이미지 URL 상태

  const coverImageRef = useRef<HTMLInputElement>(null);
  const formData = new FormData(); // 1차 책 인트로 폼데이터

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

  // const addTableContentsToFormData = (response): void => {
  //   tableContents.forEach((item, index) => {
  //     formData2.append("bookId", response.data?.result.book_id);
  //     formData2.append("index", String(index + 1));
  //     formData2.append("title", item.title);
  //     formData2.append("content", item.content);

  //     if (item.image) {
  //       formData2.append("image", item.image);
  //     }
  //   });
  // };
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
    image?: File[],
  ): void => {
    setTableContents([...tableContents, { title, content, image }]);
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

  // API 요청 함수
  const onClickSubmitBook = async (): Promise<void> => {
    // 1차 책 생성 요청 작업
    formData.append("title", title);
    formData.append("intro", intro);
    if (selectedCategory !== null) {
      formData.append("category", selectedCategory);
    }

    if (thumbnail !== null) {
      formData.append("thumbnail", thumbnail);
    }
    console.log("formData1");
    console.log(formData);

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

      console.log("1번째 응답 데이터");
      console.log(response.data); // 응답 데이터 처리

      // 각 목차 항목에 대한 요청을 준비
      const promises = tableContents.map(async (item, index) => {
        const formData2 = new FormData();
        formData2.append("bookId", String(response.data?.result.book_id));
        formData2.append("index", String(index + 1));
        formData2.append("title", item.title);
        formData2.append("text", item.content);
        if (item.image && item.image.length > 0) {
          item.image.forEach((file) => {
            // 'image[]'는 서버측에서 배열로 파일을 받기 위한 표현입니다.
            // 각 파일에 대해 고유한 키를 부여하기 위해 인덱스를 사용할 수 있습니다.
            formData2.append(`image`, file);
          });
        }

        const response2 = await axios.post(
          "http://localhost:8080/books/contents",
          formData2,
          {
            headers: {
              authorization: accessToken,
              refresh: refreshToken,
            },
          },
        );
        console.log("2번째 응답 데이터");
        console.log(response2);
      });

      // 모든 목차 항목에 대한 요청을 동시에 실행
      const results = await Promise.all(promises);
      console.log("results");
      console.log(results); // 모든 요청의 결과 확인

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
