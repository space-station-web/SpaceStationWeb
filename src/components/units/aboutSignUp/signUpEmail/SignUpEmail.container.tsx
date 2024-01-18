import { useRouter } from "next/router";
import SignUpEmailUI from "./SignUpEmail.presenter";

export default function SignUpEmail(): JSX.Element {
  const router = useRouter();
  const onClickMoveSuccess = async (): Promise<void> => {
    await router.push("../../../../../../signUp/signUpSuccess");
  };
  
  return <SignUpEmailUI onClickMoveSuccess={onClickMoveSuccess}/>;
}
