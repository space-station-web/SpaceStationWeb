import * as F from "./LoginFindSuccessEmail.styles";
import type { ILoginFindEmailTypes } from "./LoginFindSuccessEmail.types";

export default function LoginFindSuccessEmailUI(
  props: ILoginFindEmailTypes,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Stack style={{ marginTop: 363, alignItems: "center" }}>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 30 }}>나의 생각이 정착할</div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 55 }}>우주 정거장</div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 15 }}>2023 Space Station</div>
        </F.Stack>
        <F.Form>
          <F.Icon src="/common/icon/icon.png" />
          <F.Text>
            {props._nick}님의 이메일은
            <br />
            {props._email}입니다.
          </F.Text>
          <F.Button onClick={props.onClickMoveLogin}>로그인</F.Button>
          <F.Button onClick={props.onClickMoveFindPw}>비밀번호 찾기</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
