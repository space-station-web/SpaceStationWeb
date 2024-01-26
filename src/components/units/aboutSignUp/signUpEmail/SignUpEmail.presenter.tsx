import * as F from "./SignUpEmail.styles";
import type { ISignUpEmail } from "./SignUpEmail.types";

export default function SignUpEmailUI(props: ISignUpEmail): JSX.Element {
  return (
    <>
      <F.Wrapper>
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
              placeholder="이름/닉네임"
              onChange={props.onChangeName} 
            />
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
          </F.InputTextForm>
          <F.InputTextForm>
            <F.Input 
              placeholder="생년월일"
              onChange={props.onChangeBirth} 
            />
          </F.InputTextForm>

          <F.blank></F.blank>
          <F.UtilBox>
            <F.CheckBox type="checkbox" />
            <F.NormText>
              [필수] 이용 약관 및 개인정보 처리방침에 동의합니다.
            </F.NormText>
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
