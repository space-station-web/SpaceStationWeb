import * as F from "./LoginFindEmail.styles";
import type { IFindEmail } from "./LoginFindEmail.types";

export default function LoginFindEmailUI(props: IFindEmail): JSX.Element {
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
          <F.Title>이메일 찾기</F.Title>
          <F.InputTextForm>
            <F.Input placeholder="이름" onChange={props.onChangeName} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input placeholder="전화번호" type="text" onChange={props.onChangeNumber} />
          </F.InputTextForm>

          <F.InputTextForm>
            <F.Input placeholder="생년월일" type="text" onChange={props.onChangeBirth} />
          </F.InputTextForm>
          <F.ErrorMessage>{props.errorMessage}</F.ErrorMessage>

          <F.SubmitButton onClick={props.handleCheck}>확인</F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
