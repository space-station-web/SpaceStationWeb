import * as F from "./LoginFindEmail.styles";
import type { IFindEmail } from "./LoginFindEmail.types";

export default function LoginFindEmailUI(props: IFindEmail): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>이메일 찾기</F.Title>
          <F.InputTextForm>
            <F.Input placeholder="이름" onChange={props.onChangeName} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input placeholder="전화번호" type="text" onChange={props.onChangePhone} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input placeholder="인증번호" type="text" />
            <F.Timer>
              {props.minutes}:{props.second}
            </F.Timer>
            <F.VertBtn onClick={props.onClickVert}>
              {props.isActive ? "재전송" : "전송"}
            </F.VertBtn>
          </F.InputTextForm>

          <F.SubmitButton>확인</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
