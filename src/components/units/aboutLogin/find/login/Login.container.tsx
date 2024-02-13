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
      console.log("res", response);
      // const accessToken = response.data.data.accessToken;
      // localStorage.setItem('accessToken', accessToken);
      setLoginState(true);
      await router.push('../../../../../../Home');
      // window.location.replace('/');
      console.log('로그인성공');
    } catch (error) {
      console.log('실패하였습니다', error);
      
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
