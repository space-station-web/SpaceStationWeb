import { useRouter } from "next/router";
import TemporaryStorageUI from "./TemporaryStorage.presenter";
import React from "react";

export default function TemporaryStorage(): JSX.Element {
  const router = useRouter();
  const onClickDelete = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage/StorageDelete");
  };
  return <TemporaryStorageUI onClickDelete={onClickDelete} />;

}
