import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from 'react';
import WriteUI from "./Write.presenter";
import TemporaryStorageUI  from '../temporaryStorage/TemporaryStorage.presenter';
import { Iwrite } from "./Write.types";

// interface IWriteProps {
//   temporaryStorageCount: number;
//   onClickTemporaryStorage: () => void;
// }

export default function Write(props: Iwrite): JSX.Element {
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>([]);
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);
  const router = useRouter();

  const handleTemporaryStorageClick = () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
    console.log(temporaryStorageCount);
    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);
    
    setIsTempSaveAlertVisible(true);
    console.log('temporaryStorageAlert');
    setTimeout(() => {
      setIsTempSaveAlertVisible(false);
    }, 2000);
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
        handleTemporaryStorageClick={handleTemporaryStorageClick}
        temporaryStorageCount={temporaryStorageCount}
      />
    </>
  );
}