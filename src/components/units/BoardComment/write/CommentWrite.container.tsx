import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type ChangeEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import CommentWriteUI from "./CommentWrite.present";
import type { ICommentWrite } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWrite): JSX.Element {
  const router = useRouter();
  const { post_id: postId } = router.query;
  const [content, setContent] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContent(event.currentTarget.value);
  };

  const onClickComment = async (): Promise<void> => {
    try {
      // const authHeader = `Bearer ${accessToken}`;
      const response = await axios.post(
        "http://localhost:8080/replies/posts",
        {
          content,
          postId,
        },
        {
          headers: {
            authorization: accessToken,
            refresh: refreshToken,
          },
        },
      );

      console.log("응답 데이터");
      console.log(response.data); // 응답 데이터 처리
      props.setRefreshData((prev) => !prev);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <CommentWriteUI
      onChangeContent={onChangeContents}
      onClickComment={onClickComment}
    />
  );
}
