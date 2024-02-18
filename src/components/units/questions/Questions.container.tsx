import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type ChangeEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../API/request";
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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async (): Promise<void> => {
      try {
        const response = await axios.get<QuestionsResponse>(
          "http://localhost:8080/questions",
          {
            headers: {
              authorization: accessToken,
              refresh: refreshToken,
            },
          },
        );
        console.log(response.data.result?.content);
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
            authorization: accessToken,
            refresh: refreshToken,
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
