import * as F from "./LoginFindSuccessEmail.styles";
import type { ILoginFindEmailTypes } from "./LoginFindSuccessEmail.types";

export default function LoginFindSuccessEmailUI(
  props: ILoginFindEmailTypes,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Icon src="/common/icon.png" />
          <F.Text>
            허거덩님의 이메일은
            <br />
            space2024@naver.com입니다.
          </F.Text>
          <F.Button>로그인</F.Button>
          <F.Button onClick={props.onClickMoveFindPw}>비밀번호 찾기</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
