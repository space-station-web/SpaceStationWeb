import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NeighborUI from "./Neighbor.presenter";
import { NeighborItemProps } from "./Neighbor.types";

axios.defaults.baseURL = "http://localhost:8080/";
function Neighbor() {
  const router = useRouter();
  const [userId, setUserId] = useState("20");
  const [accessToken, setAccessToken] = useState<string | null>("");
  const [refreshToken, setRefreshToken] = useState<string | null>("");
  const headers = {
    authorization: "Bearer " + accessToken,
    refresh: refreshToken,
  };
  const idForSee = router.query.user_id;
  const [neighborList, setNeighborList] = useState<NeighborItemProps[]>([]);
  const [myNeighborList, setMyNeighborList] = useState<number[]>([]);

  const getMyFollowList = async (): Promise<void> => {
    try {
      const response = await axios.get(`/follow/user/${userId}`, {
        headers: headers,
      });
      console.log(response.data.result);
      setMyNeighborList(
        response.data.result.map((item: NeighborItemProps) => item.follow_id),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getFollowList = async (): Promise<void> => {
    try {
      const response = await axios.get(`/follow/user/${idForSee}`, {
        headers: headers,
      });
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
      userId !== idForSee && (await getMyFollowList());
      await getFollowList();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickBack = () => {
    router.back();
  };
  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken"));
    setRefreshToken(localStorage.getItem("refreshToken"));
  }, []);
  useEffect(() => {
    if (router.isReady && accessToken && refreshToken) {
      getFollowList();
      getMyFollowList();
    }
  }, [idForSee, accessToken, refreshToken]);

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
