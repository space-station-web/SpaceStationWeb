import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetailUI from "./BoardDetail.presenter";
import type { IBoardDetailProps } from "./BoardDetail.types";

export interface PostData {
  user_id: number;
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  visibility: string;
}

interface ApiResponse {
  result: PostData;
}

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const router = useRouter();
  const { post_id: postId } = router.query;

  const [data, setData] = useState<PostData[] | null>(null);
  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof postId === "string" && postId.length > 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await axios.get<ApiResponse>(
            `http://localhost:8080/posts/${postId}`,
          );

          setData(response.data.result);
        } catch (error) {
          console.error("데이터 로딩 중 오류 발생", error);
        }
      };
      void fetchData();
    }
  }, [postId]);

  const onClickBoards = (): void => {
    void router.push("/boards");
  };

  return (
    <BoardDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
      data={data}
      //
      onClickBoards={onClickBoards}
    />
  );
}
