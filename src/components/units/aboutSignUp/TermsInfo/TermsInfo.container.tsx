import { useRouter } from "next/router";
import TermsInfoUI from "./TermsInfo.presenter";

export default function TermsInfo(): JSX.Element {
  const router = useRouter();

  
  const onClickMovePrev = async (): Promise<void> => {
    await router.push("../../../../../../signUp");
  };

  return <TermsInfoUI 
  onClickMovePrev={onClickMovePrev}
  />;
}
