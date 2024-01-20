import { useRouter } from "next/router";
import React from "react";
import WriteUI from "./Write.presenter";

export default function Write(): JSX.Element {
  const router = useRouter();
  const onClickMoveTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage");
  };
  const onClickPluseTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage");
  };
  const onClickCreateRecommand = async (): Promise<void> => {
    await router.push("../../../../../../write/CreateRecommand");
  };
  const onClickPublishWrite = async (): Promise<void> => {
    await router.push("../../../../../../write/PublishWrite");
  };
  return <WriteUI onClickMoveTemStorage={onClickMoveTemStorage} onClickCreateRecommand={onClickCreateRecommand} onClickPublishWrite={onClickPublishWrite} onClickPluseTemStorage={onClickPluseTemStorage}/>;
}
