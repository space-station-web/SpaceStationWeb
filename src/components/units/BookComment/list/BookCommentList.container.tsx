import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import type { IBoardContainer } from "./BookComment.types";
import BoardCommentListUI from "./BookCommentList.presenter";

export interface Comments {
  post_reply_id: number;
  content: string;
  create_at: string;
  PostId: number;
  user_id: number;
}

interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Comments[];
}

export default function BookCommentList(props: IBoardContainer): JSX.Element {
  const router = useRouter();
  const { post_id: postId } = router.query;
  const [comments, setComments] = useState<Comments[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  useEffect(() => {
    // fetchComments 함수를 useEffect 외부로 이동
    const fetchComments = async (): Promise<void> => {
      if (typeof postId === "string" && postId.length > 0) {
        try {
          const response = await axios.get<ApiResponse>(
            `http://localhost:8080/replies/books/?bookId=${postId}`,
            {
              headers: {
                authorization: accessToken,
                refresh: refreshToken,
              },
            },
          );
          setComments(response.data.result);
          console.log(response);
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    void fetchComments();
  }, [accessToken, refreshToken, props.refreshData]); // 의존성 배열에 id를 추가

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    const replyId = event.currentTarget.id;
    try {
      const response = await axios.delete(
        `http://localhost:8080/replies/books/?replyId=${replyId}`,
        {
          headers: {
            authorization: accessToken,
            refresh: refreshToken,
          },
        },
      );

      console.log(response.data);
      props.setRefreshData((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <BoardCommentListUI comments={comments} onClickDelete={onClickDelete} />
    </>
  );
}
