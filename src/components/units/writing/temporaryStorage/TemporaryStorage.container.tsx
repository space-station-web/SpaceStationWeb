import { useRouter } from "next/router";
import TemporaryStorageUI from "./TemporaryStorage.presenter";
import React from "react";

export default function TemporaryStorage(): JSX.Element {
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
  return <TemporaryStorageUI onClickDelete={onClickDelete} onClickMoveWriting={onClickMoveWriting} onClickMoveWrite={onClickMoveWrite} />;

}
