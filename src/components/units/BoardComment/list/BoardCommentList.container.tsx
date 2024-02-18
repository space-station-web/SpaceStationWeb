import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import BoardCommentListUI from "./BoardCommentList.presenter";

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

export default function BoardCommentList(): JSX.Element {
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
            `http://localhost:8080/replies/posts/?postId=${postId}`,
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
  }, [accessToken, refreshToken]); // 의존성 배열에 id를 추가

  return <BoardCommentListUI comments={comments} />;
}
