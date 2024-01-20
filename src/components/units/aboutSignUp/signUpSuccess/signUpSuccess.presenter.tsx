import * as F from "./signUpSuccess.styles";
import type { ISignUpSuccess } from "./signUpSuccess.types";

export default function SignUpSuccessUI(
  props: ISignUpSuccess,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Icon src="/common/icon/rocket.png" />
          <F.Heading1>
          허거덩님 환영해요!
          </F.Heading1>
          <F.Heading2>
          우주정거장 가입이 완료됐어요.
          </F.Heading2>
          <F.Button onClick={props.onClickMoveLogin}>로그인</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
