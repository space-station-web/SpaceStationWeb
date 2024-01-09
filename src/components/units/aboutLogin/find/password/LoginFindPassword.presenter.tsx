import * as F from "./LoginFindPassword.styles";

export default function LoginFindPasswordUI(): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>비밀번호 찾기</F.Title>
          <F.InputTextForm>
            <F.TitleText>이름</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>이메일</F.TitleText>
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
