import * as F from "./LoginFindSuccessPassword.styles";
import type { IFindSuccessPasswordType } from "./LoginFindSuccessPassword.types";

export default function LoginFindSuccessPasswordUI(
  props: IFindSuccessPasswordType,
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
            비밀번호 변경이 완료되었습니다.
          </F.Text>
          <F.Button onClick={props.onClickMoveLogin}>로그인</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
