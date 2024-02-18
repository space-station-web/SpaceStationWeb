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
  contents: ContentData[];

  // content: string;
  // created_at: string;

  // visibility: string;
}
export interface ContentData {
  content_title: string;
  content_text: string;
  content_index: number;
  image: string[];
  // 다른 필드들...
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
  const [refreshData, setRefreshData] = useState(false); // 데이터 리프레시를 위한 상태

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
            `http://localhost:8080/books/?bookId=${bookId}`,
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
  }, [bookId, accessToken, refreshToken, refreshData]);

  // 게시글 보관 api 요청

  const onClickSave = async (): Promise<void> => {
    if (typeof bookId === "string") {
      try {
        console.log(data?.storage);
        const response = await (data?.storage === false
          ? axios.post(
              `http://localhost:8080/storages/books/${bookId}`,
              {
                typeId: 2,
              },
              {
                headers: {
                  authorization: accessToken,
                  refresh: refreshToken,
                },
              },
            )
          : axios.delete(
              `http://localhost:8080/storages/books/${bookId}?typeId=2`,
              {
                headers: {
                  authorization: accessToken,
                  refresh: refreshToken,
                },
              },
            ));

        if (response.status === 200) {
          setRefreshData((prev) => !prev);
        }
        console.log(response.data);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생", error);
      }
    } else {
      console.log("not type postId");
    }
  };

  // 책 좋아요 및 취소
  const onClickLike = async (): Promise<void> => {
    if (typeof bookId === "string") {
      try {
        const response = await (data?.like === false
          ? axios.post(
              `http://localhost:8080/likes/books/${bookId}`,
              {},
              {
                headers: {
                  authorization: accessToken,
                  refresh: refreshToken,
                },
              },
            )
          : axios.delete(`http://localhost:8080/likes/books/${bookId}`, {
              headers: {
                authorization: accessToken,
                refresh: refreshToken,
              },
            }));

        if (response.status === 200) {
          setRefreshData((prev) => !prev);
        }
        console.log(response.data);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생", error);
      }
    } else {
      console.log("not type postId");
    }
  };

  return (
    <BookDetailUI
      onClickCommentToggle={onClickCommentToggle}
      onClickLike={onClickLike}
      setIsOpen={props.setIsOpen}
      data={data}
      onClickSave={onClickSave}
    />
  );
}
