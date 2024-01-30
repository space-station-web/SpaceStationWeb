import TemporaryStorageWritingUI from "./TemporaryStorageWriting.presenter";
import { useRouter } from "next/router";
import React, { useState } from 'react';

export default function TemporaryStorage(): JSX.Element {
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const router = useRouter();

  const handleTemporaryStorageClick = () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
  };
  const onClickMoveTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage");
  };
  const onClickPluseTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStoragePluse");
  };
  const onClickCreateRecommand = async (): Promise<void> => {
    await router.push("../../../../../../write/CreateRecommand");
  };
  return (
    <>
      <TemporaryStorageWritingUI
        onClickMoveTemStorage={onClickMoveTemStorage}
        onClickCreateRecommand={onClickCreateRecommand}
        onClickPluseTemStorage={onClickPluseTemStorage}
      />
    </>
  );
}
  