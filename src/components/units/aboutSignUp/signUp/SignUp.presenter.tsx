import * as F from "./SignUp.styles";
import type { ISignUp } from "./SignUp.types";

export default function SignUpUI(
  props: ISignUp,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Icon src="/common/icon/planet.png" />
          <F.Heading1>
          우주정거장에서 자신만의 글을 써내려가보세요.
          </F.Heading1>
          <F.Heading2>
          오늘의 글감과 질문으로 작문이 훨씬 수월해질 거예요.
          </F.Heading2>
          <F.Button onClick={props.onClickMoveSignUpEm}>이메일로 가입하기</F.Button>
          <F.Button onClick={props.onClickMoveNaver}>네이버로 시작하기</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
