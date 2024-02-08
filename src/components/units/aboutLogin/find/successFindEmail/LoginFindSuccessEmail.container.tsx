import { useRouter } from "next/router";
import LoginFindSuccessEmailUI from "./LoginFindSuccessEmail.presenter";

export default function LoginFindSuccessEmail(): JSX.Element {
  const router = useRouter();
  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/sendEmail");
  };
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
  return <LoginFindSuccessEmailUI 
  onClickMoveFindPw={onClickMoveFindPw} 
  onClickMoveLogin={onClickMoveLogin}
  />;
}
