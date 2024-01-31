import { useRouter } from "next/router";
import LoginFindSuccessPasswordUI from "./LoginFindSuccessPassword.presenter";

export default function LoginFindSuccessPassword(): JSX.Element {
  const router = useRouter();
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
  return <LoginFindSuccessPasswordUI onClickMoveLogin={onClickMoveLogin} />;
}
