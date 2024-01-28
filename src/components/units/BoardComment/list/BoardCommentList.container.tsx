import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";

export interface Comments {
  id: number;
  content: string;
  UserId: number;
  PostId: number;
}

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<Comments[]>([]);

  // fetchComments 함수를 useEffect 외부로 이동
  const fetchComments = async (): Promise<void> => {
    if (typeof id === "string" && id.length > 0) {
      try {
        const response = await axios.get<Comments[]>(
          `https://koreanjson.com/comments/${id}`,
        );
        setComments([response.data]);
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  useEffect(() => {
    void fetchComments();
  }, []); // 의존성 배열에 id를 추가

  return <BoardCommentListUI comments={comments} />;
}
