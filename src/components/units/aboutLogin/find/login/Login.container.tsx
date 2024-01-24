import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import LoginUI from "./Login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/FindPassword");
  };
  const onClickMoveFindEm = async (): Promise<void> => {
    await router.push("../../../../../../login/FindEmail");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = async (): Promise<void> => {
    try {
      console.log("em :",email);
      console.log("pw :",password);

      const response = await axios.post(
        '/login',
        {
          email,
          password,
        }
      );
      console.log("res", response);
      // const accessToken = response.data.data.accessToken;
      // localStorage.setItem('accessToken', accessToken);

      await router.push('../../../../../../Home');
      // window.location.replace('/');
      console.log('로그인성공');
    } catch (error) {
      console.log('실패하였습니다', error);
      
    }
  };

  return <LoginUI 
  onClickMoveFindPw={onClickMoveFindPw} 
  onClickMoveFindEm={onClickMoveFindEm} 
  onChangeEmail={onChangeEmail} 
  onChangePassword={onChangePassword} 
  handleLogin={handleLogin} />;
}
