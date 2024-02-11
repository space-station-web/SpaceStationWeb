import * as Q from "./Question.styles";

export default function QuestionsUI(): JSX.Element {
  return (
    <>
      <Q.Wrapper>
        <Q.TopDiv>
          <Q.Prev src="/common/icon/Arrow 2.png" />
          <Q.Button>답변하기</Q.Button>
        </Q.TopDiv>
        <Q.QuestionContainer>
          <Q.Category>오늘의 질문</Q.Category>
          <Q.QuestionTitle>123</Q.QuestionTitle>
          <Q.AnswerText />
        </Q.QuestionContainer>
      </Q.Wrapper>
    </>
  );
}
