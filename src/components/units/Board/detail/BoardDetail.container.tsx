import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetailUI from "./BoardDetail.presenter";
import type { IBoardDetailProps, IData } from "./BoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<IData | null>(null);
  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof id === "string" && id.length > 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await axios.get<IData>(
            `https://koreanjson.com/posts/${id}`,
          );
          setData(response.data); // 응답 데이터를 data 상태로 설정
        } catch (error) {
          console.error("데이터 로딩 중 오류 발생", error);
        }
      };
      void fetchData();
    }
  }, [id]);

  return (
    <BoardDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
      data={data}
    />
  );
}
