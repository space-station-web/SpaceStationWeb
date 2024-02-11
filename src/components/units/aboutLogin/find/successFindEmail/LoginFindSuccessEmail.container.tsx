import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoginFindSuccessEmailUI from "./LoginFindSuccessEmail.presenter";

export default function LoginFindSuccessEmail(): JSX.Element {
  const router = useRouter();
  const { nickname, email } = router.query;

  const [_nick, setNick] = useState("");
  const [_email, setEmail] = useState("");

  console.log("nickname",nickname);
  console.log("email",email);

  useEffect(() => {
    setNick(nickname);
    setEmail(email);
  }, [nickname, email]);

  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/sendEmail");
  };
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
  return <LoginFindSuccessEmailUI 
  onClickMoveFindPw={onClickMoveFindPw} 
  onClickMoveLogin={onClickMoveLogin}
  _nick={_nick}
  _email={_email}
  />;
}
