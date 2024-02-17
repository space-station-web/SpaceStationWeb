import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { isLoginState } from "../../recoil/Recoil.auth.state";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  // const { nickname } = router.query;

  const [login, setLoginState] = useRecoilState(isLoginState);
  const [_nick, setNick] = useState("");

  // const [isTokenState, setIsTokenState] = useState(false);

  // useEffect(() => {
  //   setNick(nickname);
  // }, [nickname]);
  
  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    const nickname = window.localStorage.getItem('nickname');
    if (accessToken !== null) {
      setLoginState(true);
    }
    if (nickname !== null) {
      setNick(nickname);
    }
  }, []);

  const onClickLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
  const onClickLogout = async (): Promise<void> => {
    setLoginState(false);
    localStorage.clear(); // 모든 로컬 스토리지 항목 삭제
    await router.push("../../../../../../login/");
  };
  const onClickSignUp = async (): Promise<void> => {
    await router.push("../../../../../../signUp");
  };

  return <LayoutHeaderUI 
  onClickLogin={onClickLogin}
  onClickLogout={onClickLogout}
  onClickSignUp={onClickSignUp}
  login={login}
  _nick={_nick}
  />;
}
