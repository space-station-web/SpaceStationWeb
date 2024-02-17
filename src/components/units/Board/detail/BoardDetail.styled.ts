import styled from "@emotion/styled";
import Like from "../../../../../public/board/like.svg";
import More from "../../../../../public/common/icon/more.svg";
import Save from "../../../../../public/save.svg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 250px 20px 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 46.1rem;
  height: 4.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  float: left;
  cursor: pointer;
  z-index: 2;
`;

export const ShareBtn = styled.button`
  width: 6.1rem;
  height: 1.9rem;
  border: none;
  border-radius: 999px;
  background-color: #1e1e1e;

  font-size: 0.76rem;
  font-weight: 600;
  color: #dcdcdc;
`;

export const BoardWrapper = styled.div`
  z-index: 2;
  width: 46.1rem;
  border-radius: 20px;
`;

export const TopBoard = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 0 30px 0 60px;
  background-color: #141414;
  border-radius: 20px 20px 0px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MoreIcon = styled(More)`
  cursor: pointer;
`;

export const UserProfile = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #dcdcdc;

  margin-left: 0.76rem;
`;

export const BoardMiddle = styled.p`
  width: 100%;
  padding: 60px 60px 10px 60px;

  background-color: #1e1e1e;
`;

export const BoardTopContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Title = styled.div`
  width: 90%;
  padding: 15px;

  font-size: 1.15rem;
  font-weight: 600;
  color: #dcdcdc;
`;
export const CreateAt = styled.p`
  color: #b4b4b4;
  font-size: 0.65rem;
  position: absolute;
  bottom: 0.65rem;
  left: 36.2rem;
  width: 100%;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  gap: 10px;
  justify-content: center;
`;

export const Image = styled.img`
  width: 288px;
  height: 370px;
  margin: 40px 0 40px 0;
  border-radius: 10px;
`;

export const Contents = styled.p`
  width: 100%;
  font-size: 0.69rem;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
  color: #b4b4b4;

  border-bottom: 1px solid #8c8c8c;
  padding: 30px 20px 30px 20px;
`;

export const BoardBottom = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 60px;
  background-color: #1e1e1e;

  border-radius: 0 0 20px 20px;
`;

export const CommentToggle = styled.button`
  width: 5rem;
  height: 1.5rem;
  border-radius: 999px;
  border: none;

  font-size: 0.76rem;
  background-color: #b4b4b4;
  margin-left: 10px;

  cursor: pointer;

  transition: background-color 0.3s ease; /* 트랜지션 속성 추가 */

  &:hover {
    background-color: #1e1e1e; /* 원하는 hover 시 색상으로 변경 */
    color: #b4b4b4;
    border: 1px solid #b4b4b4;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SaveButton = styled(Save)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 20px;
  cursor: pointer;
`;

export const CountLike = styled.p`
  font-size: 1rem;
  color: #8c8c8c;
  margin-right: 15px;
`;

export const LikeIcon = styled(Like)`
  margin-right: 5px;
  cursor: pointer;
`;

export const BookModalContainer = styled.div`
  position: absolute;
  left: 59.1rem;
`;
