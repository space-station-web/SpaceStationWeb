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
        );
        const firstQuestionTitle = response.data.result[0].content;
        setQuestionTitle(firstQuestionTitle);
        console.log(firstQuestionTitle);
      } catch (error) {
        console.error("Questions fetching error:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    void fetchQuestions();
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 단 한 번만 실행되도록 합니다.
  return <QuestionsUI questionTitle={questionTitle} />;
}
