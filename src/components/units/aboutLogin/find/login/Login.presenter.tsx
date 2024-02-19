import * as F from "./Login.styles";
import type { ILogin } from "./Login.types";

export default function LoginUI(props: ILogin): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Prev
          onClick={props.onClickMovePrev}
          src="/common/icon/Arrow 2.png"
        />
        <F.Stack style={{ marginTop: 363, alignItems: "center" }}>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 30 }}>
            나의 생각이 정착할
          </div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 55 }}>
            우주 정거장
          </div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 15 }}>
            2023 Space Station
          </div>
        </F.Stack>
        <F.Form>
          <F.InputTextForm>
            <F.Input placeholder="이메일" onChange={props.onChangeEmail} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
          </F.InputTextForm>

          <F.UtilForm>
            <F.UtilBox>
              <F.CheckBox type="checkbox" />
              <F.NormText>자동 로그인</F.NormText>
            </F.UtilBox>

            <F.UtilBox>
              <F.UtilText onClick={props.onClickMoveSignUp}>
                회원 가입
              </F.UtilText>
              <F.NormText>|</F.NormText>
              <F.UtilText onClick={props.onClickMoveFindEm}>이메일</F.UtilText>
              <F.NormText>|</F.NormText>
              <F.UtilText onClick={props.onClickMoveFindPw}>
                비밀번호 찾기
              </F.UtilText>
            </F.UtilBox>
          </F.UtilForm>

          <F.SubmitButton onClick={props.handleLogin}>로그인</F.SubmitButton>

          {/* <F.Line></F.Line> */}

          {/* <F.SubmitButton>네이버로 로그인</F.SubmitButton> */}
        </F.Form>
      </F.Wrapper>
    </>
  );
}
