import * as F from "./LoginFindSuccessPassword.styles";

export default function LoginFindSuccessPasswordUI(): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>비밀번호 찾기</F.Title>
          <F.Input type="password" placeholder="새 비밀번호" />
          <F.Input type="password" placeholder="새 비밀번호 확인" />
          <F.Button>로그인</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
