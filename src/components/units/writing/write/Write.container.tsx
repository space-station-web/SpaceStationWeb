import { useRouter } from "next/router";
import React, { useState } from 'react';
import WriteUI from "./Write.presenter";
import TemporaryStorageUI  from '../temporaryStorage/TemporaryStorage.presenter';

interface IWriteProps {
  temporaryStorageCount: number;
  onClickTemporaryStorage: () => void;
}

export default function Write(props: IWriteProps): JSX.Element {
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const router = useRouter();

  const handleTemporaryStorageClick = () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
  };
  const onClickMoveHomePage = async (): Promise<void> => {
    await router.push("../../../../../../Home");
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
      <WriteUI
        onClickMoveHomePage={onClickMoveHomePage}
        onClickMoveTemStorage={onClickMoveTemStorage}
        onClickCreateRecommand={onClickCreateRecommand}
        onClickPluseTemStorage={onClickPluseTemStorage}
      />
    </>
  );
}