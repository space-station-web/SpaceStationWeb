import { useEffect } from "react";
import * as styled from "./Neighbor.styles";
import { NeighborUIprops } from "./Neighbor.types";

function NeighborUI({
  neighborList,
  myFollowList,
  changeFollow,
  handleClickBack,
}: NeighborUIprops) {
  useEffect(() => {
    console.log(neighborList);
  });
  return (
    <styled.Wrapper>
      <img
        src="/common/icon/icon_back.svg"
        style={{ alignSelf: "flex-start", cursor: "pointer" }}
        onClick={handleClickBack}
      />
      <div>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    color: "#dcdcdc",
                  }}
                >
                  <styled.ProfileImg />
                  <div>{item.follow_nickname}</div>
                </div>
                <styled.FollowBtn
                  $follow={myFollowList.includes(item.follow_id)}
                  onClick={() => {
                    changeFollow(item.follow_id);
                  }}
                >
                  {myFollowList.includes(item.follow_id) ? "취소" : "구독"}
                </styled.FollowBtn>
              </styled.NeighborItem>
            );
          })}
        </styled.List>
      </div>
    </styled.Wrapper>
  );
}

export default NeighborUI;
