import * as Q from "./Question.styles";

interface Questions {
  questionTitle: string;
}

export default function QuestionsUI(props: Questions): JSX.Element {
  return (
    <>
      <Q.Wrapper>
        <Q.TopDiv>
          <Q.Prev src="/common/icon/Arrow 2.png" />
          <Q.Button>답변하기</Q.Button>
        </Q.TopDiv>
        <Q.QuestionContainer>
          <Q.Category>오늘의 질문</Q.Category>

          <Q.QuestionTitle>{props.questionTitle}</Q.QuestionTitle>

          <Q.AnswerText placeholder="자유롭게 작성해보세요." />
        </Q.QuestionContainer>
      </Q.Wrapper>
    </>
  );
}
