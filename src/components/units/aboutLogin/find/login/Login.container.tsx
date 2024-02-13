import { useRouter } from "next/router";
import { useState, type ChangeEvent } from "react";
import axios from 'axios';
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginState, userIdState } from "../../../../commons/recoil/Recoil.auth.state";
import LoginUI from "./Login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();

  const [login, setLoginState] = useRecoilState(isLoginState);
  const [_userId, setUserIdState] = useRecoilState(userIdState);

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
        const userId: string = response.data.result.result.userid
  
        // 토큰 로컬스토리지 저장
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
  
        // 로그인 여부 업데이트
        setLoginState(true);
        console.log('유저',_userId);
        // const user = useRecoilValue(userIdState);
        // console.log('유저',user);

        // user-id 업데이트
        setUserIdState(userId);
  
        // 홈으로 이동
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
