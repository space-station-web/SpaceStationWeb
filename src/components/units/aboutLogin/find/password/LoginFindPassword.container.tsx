import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import LoginFindPasswordUI from "./LoginFindPassword.presenter";

export default function LoginFindPassword(): JSX.Element {
  const router = useRouter();

  const [_name, setName] = useState('');
  const [_email, setEmail] = useState('');
  const [_code, setCode] = useState('');

  const [isSendSuccess, setIsSendSuccess] = useState(false); // 인증요청 성공 여부

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangeCode = (event: ChangeEvent<HTMLInputElement>): void => {
    setCode(event.currentTarget.value);
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };
  const onClickSendMail = async (): Promise<void> => { // 메일 인증번호 요청
    try {
      const name = _name;
      const email = _email;
      
      const response = await axios.post(
        'http://localhost:8080/email-auth',
        {
          name,
          email,
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) {
        setIsSendSuccess(true);
       
        console.log('이메일 인증번호 요청 성공');
      } else {
        console.log('이메일 인증번호 요청 false');
      }
      
    } catch (error) {
      console.log('회원가입 실패', error);
    }
  };

  const onClickConfirmCode = async (): Promise<void> => { // 인증번호 확인
    try {
      const name = _name;
      const email = _email;
      const code = _code;
      
      const response = await axios.post(
        'http://localhost:8080/email-auth/verify',
        {
          name,
          email,
          code
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      const userId = response.data.result.result.userId[0][0].id;
      console.log("userId", userId);
      if (isSuccess) {
        await router.push({
          pathname: "../../../../../../login/FindPassword/changePassword",
          query: { userId },
        });
        console.log('이메일 인증번호 확인 성공');
      } else {
        console.log('이메일 인증번호 확인 false');
      }
      
    } catch (error) {
      console.log('인증번호 확인 실패', error);
    }
  };

  const onClickReSend = async (): Promise<void> => { // 인증번호 재전송
    try {
      const name = _name;
      const email = _email;
      
      const response = await axios.post(
        'http://localhost:8080/email-auth/resend',
        {
          name,
          email,
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) {
        // await router.push("../../../../../../login/FindPassword");
        console.log('이메일 인증번호 재요청 성공');
      } else {
        console.log('이메일 인증번호 재요청 false');
      }
      
    } catch (error) {
      console.log('인증번호 재요청 실패', error);
    }
  };

  return <LoginFindPasswordUI
  onChangeName={onChangeName}
  onChangeEmail={onChangeEmail}
  onChangeCode={onChangeCode}
  onClickMovePrev={onClickMovePrev}
  onClickSendMail={onClickSendMail}
  onClickConfirmCode={onClickConfirmCode}
  onClickReSend={onClickReSend}
  isSendSuccess={isSendSuccess}
  />;
}
