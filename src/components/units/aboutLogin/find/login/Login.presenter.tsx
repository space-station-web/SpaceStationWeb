import * as F from "./Login.styles";
import type { ILogin } from "./Login.types";

export default function LoginUI(
  props: ILogin,
): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.InputTextForm>
            <F.Input placeholder="이메일"/>
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input type="password" placeholder="비밀번호"/>
          </F.InputTextForm>

          <F.UtilForm>
            <F.UtilBox>
              <F.CheckBox type="checkbox" />
              <F.NormText>자동 로그인</F.NormText>
            </F.UtilBox>
            
            <F.UtilBox>
              <F.UtilText onClick={props.onClickMoveFindEm}>이메일</F.UtilText>
              <F.NormText>|</F.NormText>
              <F.UtilText onClick={props.onClickMoveFindPw}>비밀번호 찾기</F.UtilText>
            </F.UtilBox>
          </F.UtilForm>

          <F.SubmitButton>로그인</F.SubmitButton>

          <F.Line></F.Line>
          
          <F.SubmitButton>네이버로 로그인</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
