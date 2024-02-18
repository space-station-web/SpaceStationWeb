import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import BookDetailUI from "./BookDetail.presenter";
import type { IBookDetailProps } from "./BookDetail.types";

export interface BookData {
  book_id: number;
  title: string;
  intro: string;
  category: string;
  user_id: number;
  nickname: string;
  like: boolean;
  likeCount: number;
  storage: boolean;
  content: string[];

  // content: string;
  // created_at: string;

  // visibility: string;
}

interface ApiResponse {
  result: BookData;
}

export default function BookDetail(props: IBookDetailProps): JSX.Element {
  const router = useRouter();
  const { bookId } = router.query;
  const [data, setData] = useState<BookData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);

    if (typeof bookId === "string" && bookId.length > 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await axios.get<ApiResponse>(
            `http://localhost:8080/books/${bookId}`,
            {
              headers: {
                Authorization: accessToken,
                refresh: refreshToken,
              },
            },
          );

          setData(response.data.result);
          console.log(response.data.result);
        } catch (error) {
          console.error("데이터 로딩 중 오류 발생", error);
        }
      };
      void fetchData();
    }
  }, [bookId, accessToken, refreshToken]);

  return (
    <BookDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
      data={data}
    />
  );
}
