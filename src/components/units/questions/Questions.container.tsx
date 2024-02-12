import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QuestionsUI from "./Questions.presenter";

export default function Questions(): JSX.Element {
  const router = useRouter();
  const { question_id: questionId } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchQuestions(): Promise<void> {
      try {
        const response = await axios.get(
          `http://localhost:8080//questions/${questionId}`,
        );
        setData(response.data.result); // 데이터를 상태에 저장
      } catch (error) {
        console.error("Error:", error);
      }
    }

    void fetchPosts();
  }, []); // 빈 의존성 배열로 마운트 시에만 실행

  return <QuestionsUI />;
}
