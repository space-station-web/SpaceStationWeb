import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type ChangeEvent } from "react";
import QuestionsUI from "./Questions.presenter";

interface Question {
  question_id: string;
  content: string;
}

interface QuestionsResponse {
  result: Question[];
}

export default function Questions(): JSX.Element {
  const [questionTitle, setQuestionTitle] = useState<string>("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async (): Promise<void> => {
      try {
        const response = await axios.get<QuestionsResponse>(
          "http://localhost:8080/questions",
          {
            headers: {
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwNzk5MjAzMiwiZXhwIjoxNzA4MDAyODMyfQ._HO0A2M0goJxlyGedXxojwIdtGgw7KR4hnwycKEMQ7I",
              refresh:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDc5OTIwMzIsImV4cCI6MTcwODA3ODQzMn0.h4Xyvpu51i_nSG83Adr9_76XAg7KZZ3s2anF4dOeY_w",
            },
          },
        );
        console.log(response.data.result.content);
        const firstQuestionTitle = response.data.result?.content;
        setQuestionTitle(firstQuestionTitle);
      } catch (error) {
        console.error("Questions fetching error:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    void fetchQuestions();
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 단 한 번만 실행되도록 합니다.

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.currentTarget.value);
  };

  // 질문 답변 api 요청
  const onClickSubmit = async (): Promise<void> => {
    try {
      // const authHeader = `Bearer ${accessToken}`;

      const response = await axios.post(
        "http://localhost:8080/questions",

        {
          content,
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwNzk5MTAwNCwiZXhwIjoxNzA4MDAxODA0fQ.QXw2n2l_smgf-Dh0OY94kilK0DzzoZLclFwrONJapCE",
            refresh:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDc5OTEwMDQsImV4cCI6MTcwODA3NzQwNH0.IN1ua6x320RXSJcLUAAeFqtmuQmsc_JtArztxAMaV3c",
          },
        },
      );

      console.log(response.data); // 응답 데이터 처리
      // 요청 성공 후 작업 (예: 페이지 이동, 상태 업데이트)
      alert("작성 완료되었습니다.");
      void router.push("/");
    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  return (
    <QuestionsUI
      questionTitle={questionTitle}
      onChangeContent={onChangeContent}
      onClickSubmit={onClickSubmit}
    />
  );
}
