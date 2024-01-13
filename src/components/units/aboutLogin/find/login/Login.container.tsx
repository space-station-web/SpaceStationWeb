import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";

export default function Login(): JSX.Element {
  const router = useRouter();
  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/FindPassword");
  };
  const onClickMoveFindEm = async (): Promise<void> => {
    await router.push("../../../../../../login/FindEmail");
  };
  return <LoginUI onClickMoveFindPw={onClickMoveFindPw} onClickMoveFindEm={onClickMoveFindEm} />;
}
