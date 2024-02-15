import * as F from "./ChangePassword.styles";
import type { IChangePassword } from "./ChangePassword.types";

export default function ChangePasswordUI(
  props: IChangePassword,
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
          <F.Heading1>비밀번호 찾기</F.Heading1>
          <>
            <F.InputTextForm>
              <F.InputF
                type="password"
                placeholder={props.phPassword} 
                onChange={props.onChangeNewPassword}
                onFocus={props.onFocusPassword}
                onBlur={props.onBlurPassword}
              />
            </F.InputTextForm>
            {props.isError2 ? (
                <F.ErrorMessage>{props.errorMessagePw}</F.ErrorMessage>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
          </>
          <F.InputTextForm>
            <F.Input
              onChange={props.onChangeConfirmPassword}
              type="password"
              placeholder="새 비밀번호 확인"
            />
          </F.InputTextForm>
          <F.ErrorMessage>{props.errorMessage}</F.ErrorMessage>
          <F.Button onClick={props.onClickMoveSuccess}>완료</F.Button>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
