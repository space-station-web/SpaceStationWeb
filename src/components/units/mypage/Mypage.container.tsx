import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import MyPageUI from "./Mypage.presenter";
import { PostProps, QuestionProps } from "./Mypage.types";
import type { NeighborItemProps } from "./neighbor/Neighbor.types";

axios.defaults.baseURL = "http://localhost:8080/";

export const STORAGEMOCK = [
  { title: "공간" },
  { title: "요리" },
  { title: "하트" },
];
function MyPage() {
  const [userId, setUserId] = useState("1");
  const router = useRouter();
  const idForSee = router.query.user_id as string;
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [followers, setFollowers] = useState<number[]>([]);
  const [tabValue, setTabValue] = useState("내 글");
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
      );
      setPosts(response.data.result);
    } catch {
      console.log("error");
    }
  };
  const getQuestions = async (): Promise<void> => {
    try {
      const response = await axios.get("/questions/my-answer");
      console.log(response.data.result);
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
  //이웃 추가, 취소
  const changeFollow = async (): Promise<void> => {
    const response = followers.includes(parseInt(idForSee))
      ? await axios.delete("/follow", { data: { followId: idForSee } })
      : await axios.post("/follow", { followId: idForSee });
    getFollowList();
  };

  // 이웃 목록 버튼 클릭
  const handleNeighborClick = () => {
    router.push({
      pathname: "/mypage/neighbor/[user_id]",
      query: { user_id: idForSee },
    });
  };
  const addStorageItem = async () => {
    const response = await axios.post("/storagetype", { type: storageName });
  };
  useEffect(() => {
    if (idForSee) {
      getPosts();
      getQuestions();
      getFollowList();
    }
  }, [idForSee]);

  return (
    <MyPageUI
      tabValue={tabValue}
      setTabValue={setTabValue}
      tabBarMenu={tabBarMenu}
      posts={posts}
      questions={questions}
      deleteModalOpen={deleteModalOpen}
      handleDeleteModal={handleDeleteModal}
      modalType={modalType}
      handleModalType={handleModalType}
      handleNeighborClick={handleNeighborClick}
      isMine={idForSee === userId}
      isFollowing={followers.includes(parseInt(idForSee))}
      handleFollowClick={changeFollow}
      storageName={storageName}
      handleStorageChange={handleStorageChange}
    />
  );
}

export default MyPage;
