import * as F from "./Login.styles";

export default function LoginUI(): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.InputTextForm>
            <F.TitleText>이름</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>비밀번호</F.TitleText>
            <F.Input />
          </F.InputTextForm>

          <F.UtilForm>
            <F.UtilBox>
              <F.CheckBox type="checkbox" />
              <F.UtilText>자동 로그인</F.UtilText>
            </F.UtilBox>
            
            <F.UtilBox>
              <F.UtilText>이메일</F.UtilText>
              <F.UtilText>|</F.UtilText>
              <F.UtilText>비밀번호 찾기</F.UtilText>
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
