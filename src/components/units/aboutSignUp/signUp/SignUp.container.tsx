import { useRouter } from "next/router";
import SignUpUI from "./SignUp.presenter";

export default function SignUp(): JSX.Element {
  const router = useRouter();
  const onClickMoveSignUpEm = async (): Promise<void> => {
    await router.push("../../../../../../signUp/signUpEmail");
  };
 
  const onClickMoveNaver = async (): Promise<void> => {  // 여긴 아직
    await router.push("../../../../../../SignUp/FindEmail");
  };

  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };

  return <SignUpUI 
  onClickMovePrev={onClickMovePrev}
  onClickMoveSignUpEm={onClickMoveSignUpEm} 
  onClickMoveNaver={onClickMoveNaver} />;
}
