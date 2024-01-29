import * as F from "./SignUpEmail.styles";
import type { ISignUpEmail } from "./SignUpEmail.types";

export default function SignUpEmailUI(props: ISignUpEmail): JSX.Element {
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
          <F.Heading1>가입하기</F.Heading1>
          <F.InputTextForm>
            <F.Input 
              placeholder="이메일 주소"
              onChange={props.onChangeEmail}
            />
          </F.InputTextForm>
          <F.InputTextForm>
            <F.Input 
              placeholder="이름"
              onChange={props.onChangeName} 
            />
          </F.InputTextForm>
          <F.InputTextForm>
            <F.Input 
              placeholder="닉네임"
              onChange={props.onChangeName} 
            />
            <F.VertBtn>
              중복 확인
            </F.VertBtn>
          </F.InputTextForm>
          <F.InputTextForm>
            <F.Input 
              type="password"
              placeholder="비밀번호" 
              onChange={props.onChangePassword}
            />
          </F.InputTextForm>
          <F.InputTextForm>
            <F.Input 
              type="password"
              placeholder="비밀번호 확인"
              onChange={props.onChangeConfirmPassword} 
            />
          </F.InputTextForm>
          {/* <F.ErrorMessage>{props.errorMessage}</F.ErrorMessage> */}
          <F.InputTextForm>
            <F.Input 
              placeholder="휴대폰 번호"
              onChange={props.onChangeNumber} 
            />
            <F.VertBtn>
              전송
            </F.VertBtn>
          </F.InputTextForm>
          {/* <F.InputTextForm>
            <F.Input placeholder="인증번호" type="text" />
            <F.Timer>
              {props.minutes}:{props.second}
            </F.Timer>
            <F.VertBtn onClick={props.onClickVert}>
              {props.isActive ? "재전송" : "전송"}
            </F.VertBtn>
          </F.InputTextForm> */}
          <F.InputTextForm>
            <F.Input 
              placeholder="생년월일"
              onChange={props.onChangeBirth} 
            />
          </F.InputTextForm>

          <F.blank></F.blank>
          <F.UtilBox>
            <F.CheckBox type="checkbox" />
            <F.NormText>[필수] 이용 약관 및</F.NormText>
            <F.UtilText onClick={props.onClickMoveTermsInfo}>개인정보 처리방침</F.UtilText>
            <F.NormText>에 동의합니다.</F.NormText>
          </F.UtilBox>
          <F.UtilBox>
            <F.CheckBox type="checkbox" />
            <F.NormText>
              [필수] 만 14세 이상임을 확인하고 동의합니다.
            </F.NormText>
          </F.UtilBox>
          <F.UtilBox>
            <F.CheckBox type="checkbox" />
            <F.NormText>[선택] 우주 정거장 알림을 받겠습니다.</F.NormText>
          </F.UtilBox>

          <F.SubmitButton onClick={props.handleSignUp}>
            완료
          </F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
