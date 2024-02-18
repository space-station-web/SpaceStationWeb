import { Dispatch, SetStateAction } from "react";
import { StorageProps } from "../../../units/mypage/Mypage.types";

export interface StoreModalUIProps {
  storages: StorageProps[];
  selectedStorage: number[];
  setSelectedStorage: Dispatch<SetStateAction<number[]>>;
  setModalClose: () => void;
  handleStore: () => void;
  deletePost: (typeId: number) => void;
}

export interface StoreModalProps {
  postId: number;
  setModalClose: () => void;
}
