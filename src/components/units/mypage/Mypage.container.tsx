import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import MyPageUI from "./Mypage.presenter";
import { PostProps, QuestionProps, StorageProps } from "./Mypage.types";
import type { NeighborItemProps } from "./neighbor/Neighbor.types";

axios.defaults.baseURL = "http://localhost:8080/";

function MyPage() {
  const userId = "20";
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState<string | null>("");
  const router = useRouter();
  const idForSee = router.query.user_id as string;
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [storages, setStorages] = useState<StorageProps[]>([]);
  const [storedPosts, setStoredPosts] = useState<
    { name: string; list: PostProps[]; id: number } | undefined
  >(undefined);
  const [clickedStorage, setClickedStorage] = useState({
    delete: -1,
    open: -1,
  });
  const [followers, setFollowers] = useState<number[]>([]);
  const [tabValue, setTabValue] = useState("보관함");
  const tabBarMenu =
    idForSee === userId ? ["내 글", "질문집", "보관함"] : ["내 글", "보관함"];
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [storageName, setStorageName] = useState("");
  // 보관함 삭제하기 모달
  const handleDeleteModal = () => {
    setDeleteModalOpen((prev) => !prev);
  };
  // 보관함 추가, 수정 모달
  const handleModalType = (type: string) => {
    setModalType(type);
  };

  const handleStorageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStorageName(e.target.value);
  };

  // 내 글 목록
  const getPosts = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `/posts/user/${idForSee}?limit=12&offset=0`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            refresh: refreshToken,
          },
        },
      );
      setPosts(response.data.result);
    } catch {
      console.log("error");
    }
  };
  const getQuestions = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "/questions/my-answer?limit=12&offset=0",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            refresh: refreshToken,
          },
        },
      );
      await setQuestions(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const getStorageList = async () => {
    try {
      const response = await axios.get(`/storagetype/user/${idForSee}`);
      setStorages(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  //내 이웃 리스트
  const getFollowList = async (): Promise<void> => {
    try {
      const response = await axios.get(`/follow/user/${userId}`);
      setFollowers(
        response.data.result.map((item: NeighborItemProps) => item.follow_id),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getStoredPosts = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `/storages/my-post-storage?storageType=${clickedStorage.open}`,
      );
      setStoredPosts(
        storages
          .map((item) => item.storage_type_id)
          .includes(clickedStorage.open)
          ? {
              list: response.data.result,
              name: storages.filter((item) => {
                if (item.storage_type_id === clickedStorage.open)
                  return item.type;
              })[0].type,
              id: clickedStorage.open,
            }
          : undefined,
      );
    } catch (error) {
      console.log(error);
    }
  };
  //이웃 추가, 취소
  const changeFollow = async (): Promise<void> => {
    try {
      const response = followers.includes(parseInt(idForSee))
        ? await axios.delete("/follow", { data: { followId: idForSee } })
        : await axios.post("/follow", { followId: idForSee });
      await getFollowList();
    } catch (error) {
      console.log(error);
    }
  };

  // 이웃 목록 버튼 클릭
  const handleNeighborClick = () => {
    router.push({
      pathname: "/mypage/neighbor/[user_id]",
      query: { user_id: idForSee },
    });
  };
  const handlePostClick = (id: number) => {
    router.push(`/boards/${id}`);
  };
  const handleStorageSelect = (id: number, purpose: "delete" | "open") => {
    if (purpose === "delete")
      setClickedStorage({ ...clickedStorage, delete: id });
    else {
      setClickedStorage({ ...clickedStorage, open: id });
    }
  };
  const handleBackClick = () => {
    router.back();
  };
  const addStorageItem = async () => {
    try {
      const response = await axios.post("/storagetype", { type: storageName });
      await getStorageList();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStorageItem = async () => {
    try {
      const response = await axios.delete(
        `/storagetype/${clickedStorage.delete}`,
      );
      await getStorageList();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));

    if (idForSee) {
      getPosts();
      if (idForSee === userId) getQuestions();
      getStorageList();
      getFollowList();
    }
  }, [idForSee]);

  useEffect(() => {
    getStoredPosts();
  }, [clickedStorage.open, storages]);
  return (
    <MyPageUI
      tabValue={tabValue}
      setTabValue={setTabValue}
      tabBarMenu={tabBarMenu}
      posts={posts}
      questions={questions}
      storages={storages}
      storedPosts={storedPosts}
      deleteModalOpen={deleteModalOpen}
      handleDeleteModal={handleDeleteModal}
      modalType={modalType}
      handleModalType={handleModalType}
      handleNeighborClick={handleNeighborClick}
      handlePostClick={handlePostClick}
      handleStorageSelect={handleStorageSelect}
      handleBackClick={handleBackClick}
      isMine={idForSee === userId}
      isFollowing={followers.includes(parseInt(idForSee))}
      handleFollowClick={changeFollow}
      storageName={storageName}
      addStorageItem={addStorageItem}
      deleteStorageItem={deleteStorageItem}
      handleStorageChange={handleStorageChange}
    />
  );
}

export default MyPage;
