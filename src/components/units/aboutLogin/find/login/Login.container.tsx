import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../../../commons/recoil/Recoil.auth.state";
import axios from 'axios';
import LoginUI from "./Login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();

  const [login, setLoginState] = useRecoilState(isLoginState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    setLoginState(true);
    await router.push('../../../../../../Home');

    // try {
    //   console.log("em :",email);
    //   console.log("pw :",password);

    //   const response = await axios.post(
    //     '/login',
    //     {
    //       email,
    //       password,
    //     }
    //   );
    //   console.log("res", response);
    //   // const accessToken = response.data.data.accessToken;
    //   // localStorage.setItem('accessToken', accessToken);

    //   await router.push('../../../../../../Home');
    //   // window.location.replace('/');
    //   console.log('로그인성공');
    // } catch (error) {
    //   console.log('실패하였습니다', error);
      
    // }
  };

  return <LoginUI 
  onClickMoveFindPw={onClickMoveFindPw} 
  onClickMoveFindEm={onClickMoveFindEm} 
  onClickMoveSignUp={onClickMoveSignUp}
  onClickMovePrev={onClickMovePrev}
  onChangeEmail={onChangeEmail} 
  onChangePassword={onChangePassword} 
  handleLogin={handleLogin} />;
}
