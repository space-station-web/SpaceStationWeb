import axios from "axios";
import { useEffect, useState } from "react";
import { StorageProps } from "../../../units/mypage/Mypage.types";
import StoreModalUI from "./StoreModal.presenter";
import { StoreModalProps } from "./StoreModal.types";

function StoreModal({ setModalClose, postId }: StoreModalProps) {
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState<string | null>("");
  const headers = {
    authorization: "Bearer " + accessToken,
    refresh: refreshToken,
  };
  const [storages, setStorages] = useState<StorageProps[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<number[]>([]);

  const getStorages = async (): Promise<void> => {
    const response = await axios.get(`/storagetype/user/${userId}`, {
      headers: headers,
    });
    setStorages(response.data.result);
  };
  const getStoredPosts = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `/storages/posts/types?postId=${postId}`,
        { headers: headers },
      );
      setSelectedStorage([
        ...selectedStorage,
        ...response.data.result.typeList,
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (typeId: number): Promise<void> => {
    try {
      const response = await axios.delete(`/storages/posts/${postId}`, {
        headers: headers,
        data: { typeId: typeId },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const storePost = async (): Promise<void> => {
    try {
      const responses = selectedStorage.map(
        async (item) =>
          await axios.post(`/storages/posts/${postId}`, {
            headers: headers,
            data: { typeId: item },
          }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));
    const localId = window.localStorage.getItem("userId");
    if (localId !== null) setUserId(localId);
  }, []);
  useEffect(() => {
    userId.length !== 0 && getStorages();
    if (accessToken && refreshToken) getStoredPosts();
  }, [userId, accessToken, refreshToken]);

  return (
    <StoreModalUI
      storages={storages}
      selectedStorage={selectedStorage}
      setSelectedStorage={setSelectedStorage}
      setModalClose={setModalClose}
      handleStore={storePost}
      deletePost={deletePost}
    />
  );
}

export default StoreModal;
