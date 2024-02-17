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
  image_url: string[];
  like: number;
}

interface ApiResponse {
  result: PostData;
}

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const router = useRouter();
  const { post_id: postId } = router.query;
  const [isStored, setIsStored] = useState(false);

  // 게시글 보관 api 요청

  const storePost = async (): Promise<void> => {
    if (!isStored && typeof postId === "string" && postId.length > 0) {
      try {
        await axios.post(`http://localhost:8080/storages/posts/${postId}`, {
          userId: 1,
        });
        alert("게시글이 성공적으로 보관되었습니다.");
        setIsStored(true);
      } catch (error) {
        console.error("게시글 보관 중 오류 발생", error);
      }
    } else if (isStored && typeof postId === "string" && postId.length > 0) {
      try {
        await axios.delete(`http://localhost:8080/storages/posts/${postId}`, {
          data: { userId: 1 },
        });
        alert("게시글 보관이 취소되었습니다.");
        setIsStored(false);
      } catch (error) {
        console.error("게시글 보관 취소 중 오류 발생", error);
      }
    }
  };

  // 게시물 api 요청
  const [data, setData] = useState<PostData | null>(null);
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
          console.log(response.data);
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
      storePost={storePost}
      isStored={isStored}
    />
  );
}
