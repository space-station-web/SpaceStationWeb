import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NeighborUI from "./Neighbor.presenter";
import { NeighborItemProps } from "./Neighbor.types";

axios.defaults.baseURL = "http://localhost:8080/";
function Neighbor() {
  const router = useRouter();
  const [userId, setUserId] = useState("20");
  const idForSee = router.query.user_id;
  const [neighborList, setNeighborList] = useState<NeighborItemProps[]>([]);
  const [myNeighborList, setMyNeighborList] = useState<number[]>([]);

  const getMyFollowList = async (): Promise<void> => {
    try {
      const response = await axios.get(`/follow/user/${userId}`);
      setMyNeighborList(
        response.data.result.map((item: NeighborItemProps) => item.follow_id),
      );
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const getFollowList = async (): Promise<void> => {
    try {
      const response = await axios.get(`/follow/user/${idForSee}`);
      setNeighborList(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  const changeFollow = async (id: number): Promise<void> => {
    try {
      const response = myNeighborList.includes(id)
        ? await axios.delete("/follow", { data: { followId: id } })
        : await axios.post("/follow", { followId: id });
      getMyFollowList();
      getFollowList();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickBack = () => {
    router.back();
  };

  useEffect(() => {
    if (idForSee) {
      getFollowList();
      getMyFollowList();
    }
  }, [idForSee]);

  return (
    <NeighborUI
      neighborList={neighborList}
      myFollowList={myNeighborList}
      changeFollow={changeFollow}
      handleClickBack={handleClickBack}
    />
  );
}

export default Neighbor;
