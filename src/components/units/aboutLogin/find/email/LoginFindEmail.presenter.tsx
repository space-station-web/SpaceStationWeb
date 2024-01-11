import * as F from "./LoginFindEmail.styles";
import type { IFindEmail } from "./LoginFindEmail.types";

export default function LoginFindEmailUI(props: IFindEmail): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.Title>이메일 찾기</F.Title>
          <F.InputTextForm>
            <F.TitleText>이름</F.TitleText>
            <F.Input onChange={props.onChangeName} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>전화번호</F.TitleText>
            <F.Input type="text" onChange={props.onChangePhone} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.TitleText>인증번호</F.TitleText>
            <F.Input />
            <F.Timer>
              {props.minutes}:{props.second}
            </F.Timer>
            <F.VertBtn onClick={props.onClickVert}>전송</F.VertBtn>
          </F.InputTextForm>

          <F.SubmitButton>확인</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
