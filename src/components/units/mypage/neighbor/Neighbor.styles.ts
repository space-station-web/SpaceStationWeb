import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1194px;
  margin-top: 58px;
  margin-bottom: 500px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Header = styled.div`
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 29px 0px;
  padding-left: 72px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #141414;
  padding: 52px 102px;
  padding-bottom: 39px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const NeighborItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;
export const ProfileImg = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 82px;
  background-color: #b4b4b4;
`;

export const FollowBtn = styled.div<{ $follow: boolean }>`
  width: 130px;
  padding: 8px 0px;
  border-radius: 999px;
  text-align: center;
  background-color: ${(props) => (props.$follow ? "#dcdcdc" : "#0a0a0a")};
  color: ${(props) => (props.$follow ? "#1e1e1e" : "#dcdcdc")};
  border: 1px solid #dcdcdc;
  cursor: pointer;
`;
