import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QuestionProps } from "../../mypage/Mypage.types";
import QuestionForSeeUI from "./QuestionForSee.presenter";

function QuestionForSee() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState<string | null>("");
  const questionId = router.query.question_id;
  const [question, setQuestion] = useState<QuestionProps>({
    question_content: "",
    answer_content: "",
    question_id: -1,
  });
  const headers = {
    authorization: "Bearer " + accessToken,
    refresh: refreshToken,
  };
  const getQuestion = async (): Promise<void> => {
    try {
      if (questionId !== undefined) {
        const response = await axios.get(
          `http://localhost:8080/questions/${questionId}`,
          {
            headers: headers,
          },
        );
        console.log(response);
        setQuestion(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBackClick = () => {
    router.back();
  };
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));
  }, []);
  useEffect(() => {
    if (router.isReady && accessToken && refreshToken) getQuestion();
  }, [questionId, accessToken, refreshToken]);
  return (
    <QuestionForSeeUI question={question} handleBackClick={handleBackClick} />
  );
}

export default QuestionForSee;
