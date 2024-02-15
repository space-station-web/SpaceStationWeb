import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NeighborUI from "./Neighbor.presenter";
import { NeighborItemProps } from "./Neighbor.types";

axios.defaults.baseURL = "http://localhost:8080/";
function Neighbor() {
  const router = useRouter();
  const userId = router.query.user_id;
  const [neighborList, setNeighborList] = useState<NeighborItemProps[]>([]);
  const getNeighbors = async () => {
    try {
      const response = await axios.get(`/follow/user/${userId}`);
      setNeighborList(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userId) getNeighbors();
  }, [userId]);
  return <NeighborUI neighborList={neighborList} />;
}

export default Neighbor;
