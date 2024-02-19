import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import BoardDetailUI from "./BoardDetail.presenter";
import type { IBoardDetailProps } from "./BoardDetail.types";

export interface PostData {
  user_id: number;
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  visibility: string;
  image_url: string[];
  postLikeCount: number;
  postLike: boolean;
  storage: boolean;
  nickname: string;
}

interface ApiResponse {
  result: PostData;
}

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const router = useRouter();
  const { post_id: postId } = router.query;

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [_userId, setUserId] = useState("");

  const [refreshData, setRefreshData] = useState(false); // 데이터 리프레시를 위한 상태

  // 게시물 api 요청
  const [data, setData] = useState<PostData | null>(null);
  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);

    if (router.isReady) {
      const fetchData = async (): Promise<void> => {
        // postId가 문자열이고, 길이가 0보다 클 때만 실행
        if (typeof postId === "string" && postId.length > 0) {
          try {
            const response = await axios.get<ApiResponse>(
              `http://localhost:8080/posts/${postId}`,
              {
                headers: {
                  authorization: accessToken,
                  refresh: refreshToken,
                },
              },
            );
            console.log("response",response);
            setData(response.data.result);
            setUserId(response.data.result.user_id);
          } catch (error) {
            console.error("데이터 로딩 중 오류 발생", error);
          }
        }
      };

      void fetchData();
    }
  }, [postId, refreshData, accessToken, refreshToken]);

  // 게시글 보관 api 요청

  const onClickSave = async (): Promise<void> => {
    if (typeof postId === "string") {
      try {
        console.log(data?.storage);
        const response = await (data?.storage === false
          ? axios.post(
              `http://localhost:8080/storages/posts/${postId}`,
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
              `http://localhost:8080/storages/posts/${postId}?typeId=2`,
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

  const onClickBoards = (): void => {
    void router.push("/boards");
  };

  // 게시글 좋아요 및 취소
  const onClickLike = async (): Promise<void> => {
    if (typeof postId === "string") {
      try {
        const response = await (data?.postLike === false
          ? axios.post(
              `http://localhost:8080/likes/posts/${postId}`,
              {},
              {
                headers: {
                  authorization: accessToken,
                  refresh: refreshToken,
                },
              },
            )
          : axios.delete(`http://localhost:8080/likes/posts/${postId}`, {
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

  const onClickMoveMyPage = async (): Promise<void> => {
    
    await router.push(`../../../../../../mypage/${_userId}`);
  };

  return (
    <BoardDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
      data={data}
      //
      onClickBoards={onClickBoards}
      onClickLike={onClickLike}
      onClickSave={onClickSave}
      onClickMoveMyPage={onClickMoveMyPage}
    />
  );
}
