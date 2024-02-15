import axios from "axios";
import { useEffect, useState } from "react";
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
  return <QuestionsUI questionTitle={questionTitle} />;
}
