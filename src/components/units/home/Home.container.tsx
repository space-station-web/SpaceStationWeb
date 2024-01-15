import { useRouter } from "next/router";
import React from "react";
import HomeUI from "./Home.presenter";

function Home(): JSX.Element {
  const router = useRouter();
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("../../../../../../login");
  };
  return <HomeUI onClickMoveLogin={onClickMoveLogin} />;
}

export default Home;
