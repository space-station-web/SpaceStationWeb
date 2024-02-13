import { useRouter } from "next/router";
import { useState, type ChangeEvent } from "react";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../../commons/recoil/Recoil.auth.state";
import LoginUI from "./Login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();

  const [login, setLoginState] = useRecoilState(isLoginState);

  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');

  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/sendEmail");
  };
  const onClickMoveFindEm = async (): Promise<void> => {
    await router.push("../../../../../../login/FindEmail");
  };
  const onClickMoveSignUp = async (): Promise<void> => {
    await router.push("../../../../../../signUp");
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = async (): Promise<void> => {
    try {
      const email = _email;
      const pw = _password;
      const auto = true;
  
      const response = await axios.post(
        'http://localhost:8080/login',
        {
          email,
          pw,
          auto
        }
      );
  
      if (response.data.result.isSuccess === true) {
        const accessToken: string = response.data.result.result.accessToken;
        const refreshToken: string = response.data.result.result.refreshToken;
  
        // Save tokens to local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
  
        // Update login state
        setLoginState(true);
  
        // Navigate to the desired route
        await router.push('../../../../../../');
        
        console.log('로그인 성공', response);
      } else {
        console.log('로그인 실패:', response.data.result.error);
      }
    } catch (error) {
      console.log('로그인 요청 중 오류 발생:', error);
    }
  };

  return (
    <LoginUI
      onClickMoveFindPw={onClickMoveFindPw}
      onClickMoveFindEm={onClickMoveFindEm}
      onClickMoveSignUp={onClickMoveSignUp}
      onClickMovePrev={onClickMovePrev}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      handleLogin={handleLogin}
    />
  );
}
