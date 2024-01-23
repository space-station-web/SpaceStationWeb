import TemporaryStorageWritingUI from "./TemporaryStorageWriting.presenter";
import React from "react";
import { useRouter } from "next/router"; 

export default function TemporaryStorage(): JSX.Element {
    const router = useRouter();
    const onClickDelete = async (): Promise<void> => {
      await router.push("../../../../../../write/TemporaryStorage/StorageDelete");
    };
    const onClickMoveWriting = async (): Promise<void> => {
      await router.push("../../../../../../write/TemporaryStorage/TemporaryWriting");
    };
    return <TemporaryStorageWritingUI onClickDelete={onClickDelete} onClickMoveWriting={onClickMoveWriting} />;
  
  }
  