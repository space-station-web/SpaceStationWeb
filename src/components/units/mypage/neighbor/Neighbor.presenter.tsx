import { useEffect } from "react";
import * as styled from "./Neighbor.styles";
import { NeighborUIprops } from "./Neighbor.types";

function NeighborUI({ neighborList }: NeighborUIprops) {
  useEffect(() => {
    console.log(neighborList);
  });
  return (
    <styled.Wrapper>
      <styled.Header>
        <div>이웃 목록</div>
        <div>{neighborList.length}명</div>
      </styled.Header>
      <styled.List>
        {neighborList.map((item) => {
          return (
            <styled.NeighborItem
              key={`neighbor-item-${item.user_id}-${item.follow_id}`}
            >
              <div style={{ display: "flex" }}>
                <styled.ProfileImg />
                <div>{item.follow_id}</div>
              </div>
              <styled.FollowBtn $follow={item.user_id === 1}>
                {item.user_id === 1 ? "취소" : "구독"}
              </styled.FollowBtn>
            </styled.NeighborItem>
          );
        })}
      </styled.List>
    </styled.Wrapper>
  );
}

export default NeighborUI;
