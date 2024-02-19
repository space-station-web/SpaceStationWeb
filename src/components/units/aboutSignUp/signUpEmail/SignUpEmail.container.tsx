import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import SignUpEmailUI from "./SignUpEmail.presenter";

export default function SignUpEmail(): JSX.Element {
  const router = useRouter();

  const [_email, setEmail] = useState("");
  const [_name, setName] = useState("");
  const [_nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [errorMessageNick, setErrorMessageNick] = useState("ㅤ");
  const [errorMessagePW, setErrorMessagePW] = useState("ㅤ");
  const [errorMessageConfirm, setErrorMessageConfirm] = useState("ㅤ");
  const [isRight, setIsRight] = useState(false);

  const [isChecked1, setIsChecked1] = useState(false); // 필수 약관동의1
  const [isChecked2, setIsChecked2] = useState(false); // 필수 약관동의2
  const [isChecked3, setIsChecked3] = useState(false); // 선택 약관동의

  const [isError1, setIsError1] = useState(false); // 닉네임 정규식
  const [isError2, setIsError2] = useState(false); // 비밀번호 정규식
  const [isError3, setIsError3] = useState(false); // 비밀번호 확인 일치

  const [isNotDuplicate, setIsNotDuplicate] = useState(false); // 닉네임 중복 확인 (true 되면 사용 가능)
  const [isDuplicateText, setIsDuplicateText] = useState("중복 확인");


  // placeholder 변경
  const [phNick, setPhNick] = useState("닉네임");
  const [phPassword, setPhPassword] = useState("비밀번호");
  const [phNumber, setPhNumber] = useState("휴대폰 번호");
  const [phBirth, setPhBirth] = useState("생년월일");
  // const [startTimer, setStartTimer] = useState(false); // 타이머 시작 상태를 추적하는 변수
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => { // 완료 버튼 활성화 여부 (조건 모두 만족시 활성화)
    if (isChecked1 && isChecked2 && !isError1 && !isError2 && !isError3 && isNotDuplicate) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
    console.log("isRight", isRight);
  }, [isChecked1, isChecked2, isError1, isError2, isError3]);

  
  // const handleSignUp = async (): Promise<void> => {
  //   await router.push("../../../../../../signUp/signUpSuccess");
  // }

  // 회원가입
  const handleSignUp = async (): Promise<void> => {
    
    // 비번 확인 해야함 
    try {
      const name = _name;
      const nickname = _nick;
      const email = _email;
      const pw = password;
      const pwcheck = confirmPassword;
      const phone = number;
      const b_date = birth;
      const alarm = isChecked3;
      
      const response = await axios.post(
        'http://localhost:8080/signup',
        {
          name,
          nickname,
          email,
          pw,
          pwcheck,
          phone,
          b_date,
          alarm
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) {
        // await router.push("../../../../../../signUp/signUpSuccess");
        await router.push({
          pathname: "../../../../../../signUp/signUpSuccess",
          query: { nickname },
        });
        console.log('회원가입 성공');
      } else {
        console.log('회원가입 false');
      }
      
    } catch (error) {
      console.log('회원가입 실패', error);
    }
    
  };

  // 닉네임 중복 확인 
  const handleCheck = async (): Promise<void> => {
   
    try {
      const nickname = _nick;
      const response = await axios.get(
        `http://localhost:8080/signup/${nickname}`
      );
      console.log("res", response.data.isSuccess);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) {
        setIsNotDuplicate(true);
        setIsDuplicateText("사용 가능");
      } else {
        setIsNotDuplicate(false);
        setIsDuplicateText("사용 불가능");
      }
      console.log(' 성공');
    } catch (error) {
      console.log(' 실패', error);
    }
  };


  // 입력값
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangeNick = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputNick = event.currentTarget.value;
  
    // 정규표현식을 사용해서 닉네임 유효성 검사
    const nickRegex = /^[가-힣]{2,10}$|^[a-zA-Z]{2,20}$/;
    const isValidNick = nickRegex.test(inputNick);
    console.log("isValidNick",isValidNick);
  
    if (isValidNick) {
      setNick(inputNick);
      setIsError1(false); 
      setErrorMessageNick("ㅤ"); // 유효한 경우 에러 메시지를 비워줘
    } else {
      setIsError1(true); 
      setErrorMessageNick("닉네임은 한글 2~10자 또는 영어 2~20자여야 합니다.");
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputPassword = event.currentTarget.value;
  
    // 정규표현식을 사용해서 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(inputPassword);
  
    if (isValidPassword) {
      setPassword(inputPassword);
      setIsError2(false);
      setErrorMessagePW("ㅤ"); // 유효한 경우 에러 메시지를 비워줘
    } else {
      setIsError2(true); 
      setErrorMessagePW("대소문자, 숫자, 특수문자를 포함한 최소 8자여야 합니다.");
    }
  };
  const onChangeConfirmPassword = ( // 비밀번호 확인 (비밀번호와 일치할 때까지 '불일치'텍스트 나오도록)
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(event.currentTarget.value);

    if (password !== event.currentTarget.value) {
      setIsError3(true);
      setErrorMessageConfirm("비밀번호가 일치하지 않습니다.");
    } else {
      setIsError3(false);
      setErrorMessageConfirm("ㅤ");
    }
  };
  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };
  const onChangeBirth = (event: ChangeEvent<HTMLInputElement>): void => {
    setBirth(event.currentTarget.value);
  };

  // 체크박스 체크여부
  const onChangeCheck1 = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked1(event.currentTarget.checked);
  };
  const onChangeCheck2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked2(event.currentTarget.checked);
  };
  const onChangeCheck3 = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked3(event.currentTarget.checked);
  };

  // placeholder 변경
  
  const onFocusNick = async (): Promise<void> => {
    setPhNick("한글 2~10자, 영문 2~20자");
  };
  const onFocusPassword = async (): Promise<void> => {
    setPhPassword("최소 8자리, 대 소문자,숫자,특수문자 포함");
  };
  const onFocusNumber = async (): Promise<void> => {
    setPhNumber("-없이 숫자만 입력");
  };
  const onFocusBirth = async (): Promise<void> => {
    setPhBirth("숫자 8자리");
  };
  
  const onBlurNick = async (): Promise<void> => {
    setPhNick("닉네임");
  };
  const onBlurPassword = async (): Promise<void> => {
    setPhPassword("비밀번호");
  };
  const onBlurNumber = async (): Promise<void> => {
    setPhNumber("휴대폰 번호");
  };
  const onBlurBirth = async (): Promise<void> => {
    setPhBirth("생년월일");
  };

  

  const onClickMoveTermsInfo = async (): Promise<void> => {
    await router.push("../../../../../../signUp/signUpEmail/termsInfo");
  };

  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };
  
  return <SignUpEmailUI 
    onClickMovePrev={onClickMovePrev}
    onChangeEmail={onChangeEmail}
    onChangeName={onChangeName}
    onChangeNick={onChangeNick}
    onChangePassword={onChangePassword}
    onChangeConfirmPassword={onChangeConfirmPassword}
    onChangeNumber={onChangeNumber}
    onChangeBirth={onChangeBirth}

    onChangeCheck1={onChangeCheck1}
    onChangeCheck2={onChangeCheck2}
    onChangeCheck3={onChangeCheck3}

    isError1={isError1}
    isError2={isError2}
    isError3={isError3}

    onFocusNick={onFocusNick}
    onFocusPassword={onFocusPassword}
    onFocusNumber={onFocusNumber}
    onFocusBirth={onFocusBirth}
    onBlurNick={onBlurNick}
    onBlurPassword={onBlurPassword}
    onBlurNumber={onBlurNumber}
    onBlurBirth={onBlurBirth}
    phNick={phNick}
    phPassword={phPassword}
    phNumber={phNumber}
    phBirth={phBirth}

    handleSignUp={handleSignUp}
    handleCheck={handleCheck}
    onClickMoveTermsInfo={onClickMoveTermsInfo}
    isDuplicateText={isDuplicateText}

    isRight={isRight}
    errorMessageNick={errorMessageNick} 
    errorMessagePw={errorMessagePW}
    errorMessageConfirm={errorMessageConfirm}

    />;
}
