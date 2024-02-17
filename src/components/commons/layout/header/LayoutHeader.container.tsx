import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../recoil/Recoil.auth.state";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import axios from "axios";
import request from "../../../units/API/request";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const [login, setLoginState] = useRecoilState(isLoginState);

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
  const onClickTest = async (): Promise<void> => {
    // const accessToken = "Bearer "+ "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm1haWwiOiJhcHBsZUBuYXZlci5jb20iLCJpYXQiOjE3MDgxNjQzMTcsImV4cCI6MTcwODE3NTExN30.Od5pPuoQMTrmml3tCQFX314FHRDCp0RCHVYfrfo-G8I";
    // const refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxNjQzMTcsImV4cCI6MTcwOTM3MzkxN30.kxR4-m7PbTWNn9y8iKzlojTVHGOdsmOArB0KwO1Cgdk";
    // console.log("Access token: " , accessToken);
    // console.log("Refresh token: " , refreshToken);
    
    try {
      // const response = await axios.get(
      //   `http://localhost:8080/posts/follow-posts`,
      //   {
      //     headers: {
      //       Authorization: accessToken,
      //       refresh: refreshToken,
      //     },
      //   },
      // );
      const response = await request.get(
        `/posts/follow-posts`
      );

      console.log("response: " ,response);

      // void router.push("/boards");
    } catch (error) {
      console.error("오류가 발생했습니다.", error);
    }
  };

  return <LayoutHeaderUI 
  onClickLogin={onClickLogin}
  onClickLogout={onClickLogout}
  onClickSignUp={onClickSignUp}
  onClickTest={onClickTest}
  login={login}
  />;
}
