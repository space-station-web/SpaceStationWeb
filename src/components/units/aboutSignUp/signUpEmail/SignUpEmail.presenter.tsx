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
          
          
          <>
            <F.InputTextForm>
              <F.InputF 
                placeholder={props.phNick}
                onChange={props.onChangeNick} 
                onFocus={props.onFocusNick}
                onBlur={props.onBlurNick}
              />
              <F.VertBtn>
                중복 확인
              </F.VertBtn>
            </F.InputTextForm>
            {props.isError1 ? (
                <F.ErrorMessage>{props.errorMessageNick}</F.ErrorMessage>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
          </>
          
            
          <>
            <F.InputTextForm>
              <F.InputF
                type="password"
                placeholder={props.phPassword} 
                onChange={props.onChangePassword}
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
              type="password"
              placeholder="비밀번호 확인"
              onChange={props.onChangeConfirmPassword} 
            />
          </F.InputTextForm>
          {props.isError3 ? (
                <F.ErrorMessage>{props.errorMessageConfirm}</F.ErrorMessage>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
          <F.InputTextForm>
            <F.InputF
              placeholder={props.phNumber}
              onChange={props.onChangeNumber} 
              onFocus={props.onFocusNumber}
              onBlur={props.onBlurNumber}
            />
            {/* <F.VertBtn>
              전송
            </F.VertBtn> */}
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
            <F.InputF
              placeholder={props.phBirth}
              onChange={props.onChangeBirth}  
              onFocus={props.onFocusBirth}
              onBlur={props.onBlurBirth}
            />
          </F.InputTextForm>

          <F.blank></F.blank>
          <F.UtilBox>
            <F.CheckBox type="checkbox" onChange={props.onChangeCheck1}/>
            <F.NormText>[필수] 이용 약관 및</F.NormText>
            <F.UtilText onClick={props.onClickMoveTermsInfo}>개인정보 처리방침</F.UtilText>
            <F.NormText>에 동의합니다.</F.NormText>
          </F.UtilBox>
          <F.UtilBox>
            <F.CheckBox type="checkbox" onChange={props.onChangeCheck2}/>
            <F.NormText>
              [필수] 만 14세 이상임을 확인하고 동의합니다.
            </F.NormText>
          </F.UtilBox>
          <F.UtilBox>
            <F.CheckBox type="checkbox" onChange={props.onChangeCheck3}/>
            <F.NormText>[선택] 우주 정거장 알림을 받겠습니다.</F.NormText>
          </F.UtilBox>

          <F.SubmitButton onClick={props.handleSignUp} disabled={!props.isRight}>
            완료
          </F.SubmitButton>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
