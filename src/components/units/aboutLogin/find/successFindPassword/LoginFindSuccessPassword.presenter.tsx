import * as F from "./LoginFindSuccessPassword.styles";
import type { IFindSuccessPasswordType } from "./LoginFindSuccessPassword.types";

export default function LoginFindSuccessPasswordUI(
  props: IFindSuccessPasswordType,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>비밀번호 찾기</F.Title>
          <F.Input
            onChange={props.onChangeNewPassword}
            type="password"
            placeholder="새 비밀번호"
          />
          <F.Input
            onChange={props.onChangeConfirmPassword}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          <F.ErrorMessage>{props.errorMessage}</F.ErrorMessage>
          <F.Button>로그인</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
