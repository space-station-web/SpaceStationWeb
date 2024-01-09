import * as F from "./LoginFindEmail.styles";

export default function LoginFindEmailUI(): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>이메일 찾기</F.Title>
          <F.InputTextForm>
            <F.TitleText>이름</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>전화번호</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>인증번호</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.SubmitButton>확인</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
