import { useRouter } from "next/router";
import React from "react";
import HomeUI from "./Home.presenter";

function Home(): JSX.Element {
  const router = useRouter();
  const onClickMoveLogin = async (): Promise<void> => {
    await router.push("/login");
  };
  const onClickMoveWrite = async (): Promise<void> => {
    await router.push("/write");
  };
  return <HomeUI onClickMoveLogin={onClickMoveLogin} onClickMoveWrite={onClickMoveWrite} />;
}

export default Home;
