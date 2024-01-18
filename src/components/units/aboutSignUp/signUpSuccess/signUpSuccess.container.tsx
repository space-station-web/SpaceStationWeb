import { useRouter } from "next/router";
import SignUpSuccessUI from "./signUpSuccess.presenter";

export default function SignUpSuccess(): JSX.Element {
  const router = useRouter();
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
 
  return <SignUpSuccessUI onClickMoveLogin={onClickMoveLogin} />;
}
