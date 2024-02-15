import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookDetailUI from "./BookDetail.presenter";
import type { IBookDetailProps } from "./BookDetail.types";

export interface BookData {
  book_id: number;
  title: string;
  intro: string;
  category: string;
  user_id: number;
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

  const [data, setData] = useState<BookData[] | null>(null);

  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof bookId === "string" && bookId.length > 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await axios.get<ApiResponse>(
            `http://localhost:8080/books/${bookId}`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwNzk5MzM0NCwiZXhwIjoxNzA4MDA0MTQ0fQ.SkkEvZd7k9Z_OXbygxAboTl4MZgRo7kXaDJMIvNEpQo",
                refresh:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDc5OTMzNDQsImV4cCI6MTcwODA3OTc0NH0.YhssK4Y0EKjGbpU4o9NaJa77iFl0aCkEgwc9xg0PAxc",
              },
            },
          );

          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("데이터 로딩 중 오류 발생", error);
        }
      };
      void fetchData();
    }
  }, [bookId]);

  return (
    <BookDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
      data={data}
    />
  );
}
