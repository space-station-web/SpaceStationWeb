import { useRouter } from "next/router";
import { useState, type ChangeEvent, type FocusEvent, useEffect } from "react";
import axios from 'axios';
import SignUpEmailUI from "./SignUpEmail.presenter";

export default function SignUpEmail(): JSX.Element {
  const router = useRouter();

  const [_email, setEmail] = useState("");
  const [_name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState("ㅤ");
  const [isEdit, setIsEdit] = useState(false);

  // placeholder 변경
  const [phNick, setPhNick] = useState("닉네임");
  const [phPassword, setPhPassword] = useState("비밀번호");
  const [phNumber, setPhNumber] = useState("휴대폰 번호");
  const [phBirth, setPhBirth] = useState("생년월일");
  // const [startTimer, setStartTimer] = useState(false); // 타이머 시작 상태를 추적하는 변수
  // const [isActive, setIsActive] = useState(false);

  // // Timer
  // const minuteInMs = 2 * 60 * 1000;
  // const interval = 1000;
  // const [timeLeft, setTimeLeft] = useState(minuteInMs);

  // const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
  //   2,
  //   "0",
  // );
  // const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
  // useEffect(() => {
  //   let timer: number | undefined;
  //   if (startTimer) {
  //     // 타이머 시작 상태가 true일 때만 타이머를 시작합니다.
  //     timer = window.setInterval(() => {
  //       setTimeLeft((prevTime) => prevTime - interval);
  //     }, interval);

  //     if (timeLeft <= 0) {
  //       clearInterval(timer);
  //       console.log("타이머가 종료되었습니다.");
  //       setStartTimer(false); // 타이머가 종료되면 시작 상태를 false로 설정합니다.
  //     }
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [timeLeft, startTimer]); // startTimer를 의존성 배열에 추가합니다.
  // // Timer End

  // const onClickVert = (): void => {
  //   if (number === "") {
  //     alert("전화번호를 입력해주세요.");
  //     return;
  //   }
  //   if (isActive) {
  //     setTimeLeft(minuteInMs);
  //   }
  //   setStartTimer(true); // 버튼 클릭 시 타이머 시작 상태를 true로 설정합니다.
  //   alert("인증번호가 전송되었습니다.");

  //   setIsActive(true);
  // };

  const handleSignUp = async (): Promise<void> => {
    // 비번 확인 해야함 
    try {
      const name = _name;
      const email = _email;
      const pw = password;
      const pwcheck = confirmPassword;
      const phone = number;
      const b_date = birth;
      
      const response = await axios.post(
        '/signup',
        {
          name,
          email,
          pw,
          pwcheck,
          phone,
          b_date
        }
      );
      console.log("res", response);
      await router.push("../../../../../../signUp/signUpSuccess");
      console.log('회원가입 성공');
    } catch (error) {
      console.log('회원가입 실패', error);
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
    setName(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };
  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };
  const onChangeBirth = (event: ChangeEvent<HTMLInputElement>): void => {
    setBirth(event.currentTarget.value);
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

  const onChangeConfirmPassword = ( // 비밀번호 확인 (비밀번호와 일치할 때까지 '불일치'텍스트 나오도록)
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(event.currentTarget.value);

    if (password !== event.currentTarget.value) {
      setIsEdit(true);
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsEdit(false);
      setErrorMessage("ㅤ");
    }
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
    onClickMoveTermsInfo={onClickMoveTermsInfo}
    isEdit={isEdit}
    errorMessage={errorMessage} 

    />;
}
