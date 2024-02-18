import * as Q from "./QuestionForSee.styles";
import { QuestionForSeeProps } from "./QuestionForSee.types";
function QuestionForSeeUI({ question, handleBackClick }: QuestionForSeeProps) {
  return (
    <Q.Wrapper>
      <Q.TopDiv>
        <Q.Prev src="/common/icon/icon_back.svg" onClick={handleBackClick} />
      </Q.TopDiv>
      <Q.QuestionContainer>
        <Q.Category>오늘의 질문</Q.Category>

        <Q.QuestionTitle>{question.question_content}</Q.QuestionTitle>

        <div
          style={{
            color: "#b4b4b4",
            fontSize: 17,
            marginTop: 22,
            lineHeight: "25px",
          }}
        >
          {question.answer_content}
        </div>
      </Q.QuestionContainer>
    </Q.Wrapper>
  );
}

export default QuestionForSeeUI;
