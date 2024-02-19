import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SignUpSuccessUI from "./signUpSuccess.presenter";

export default function SignUpSuccess(): JSX.Element {
  const router = useRouter();
  const [_nick, setNick] = useState("");
  const { nickname } = router.query;

  useEffect(() => {
    setNick(nickname);
    
  }, [nickname]);
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
 
  return <SignUpSuccessUI 
  onClickMoveLogin={onClickMoveLogin}
  _nick={_nick}
   />;
}
