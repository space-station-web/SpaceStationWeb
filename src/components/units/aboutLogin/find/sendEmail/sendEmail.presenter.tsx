import * as F from "./sendEmail.styles";
import type { ISendEmail } from "./sendEmail.types";

export default function SendEmailUI(props: ISendEmail): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Prev onClick={props.onClickMovePrev} src="/common/icon/Arrow 2.png" />
        <F.Stack style={{ marginTop: 363, alignItems: "center" }}>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 30 }}>나의 생각이 정착할</div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 55 }}>우주 정거장</div>
          <div style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: 15 }}>2023 Space Station</div>
        </F.Stack>
        <F.Form>
          <F.Title>비밀번호 찾기</F.Title>
          <F.InputTextForm>
            <F.Input placeholder="이름"/>
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input placeholder="이메일"/>
          </F.InputTextForm>

          <F.SubmitButton onClick={props.onClickMoveFindPw}>이메일 인증번호 받기</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
