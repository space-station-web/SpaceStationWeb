import { useRouter } from "next/router";
import TemporaryStorageUI from "./TemporaryStorage.presenter";
import React, { createContext, useContext, useState } from 'react';

interface ITemporaryStorageProps {
  temporaryStorageCount: number;
  onClickMoveWrite: () => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickMoveWriting: () => Promise<void>;
}
export default function TemporaryStorage(props: ITemporaryStorageProps): JSX.Element {
  
  const router = useRouter();
  const onClickMoveWrite = async (): Promise<void> => {
    await router.push("../../../../../../write");
  }; 
  const onClickDelete = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage/StorageDelete");
  };
  const onClickMoveWriting = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage/TemporaryWriting");
  };
  return (
    <TemporaryStorageUI
      temporaryStorageCount={props.temporaryStorageCount}
      onClickDelete={onClickDelete}
      onClickMoveWriting={onClickMoveWriting}
      onClickMoveWrite={onClickMoveWrite}
    />
  );
}