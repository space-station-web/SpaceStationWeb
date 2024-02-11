import styled from "@emotion/styled";
import Save from "../../../../../public/save.svg";

export const Wrapper = styled.div`
  padding: 50px 200px 0px 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 32px;
  height: 32px;
  float: left;
  cursor: pointer;
`;

export const CategoryDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const Category = styled.button`
  width: 6.1rem;
  height: 1.9rem;
  border: none;
  border: 2px solid #1e1e1e;
  border-radius: 999px;
  margin: 0 5px 0 5px;
  background-color: #0a0a0a;
  color: #b4b4b4;
  font-size: 0.6rem;
  font-weight: 600;

  cursor: pointer;
  z-index: 100;

  transition: background-color 0.3s ease; /* 배경색 변경에 대한 트랜지션 효과 추가 */
  &:hover {
    background-color: #dcdcdc; /* hover 시 배경색 변경 */
    color: #141414;
  }
`;

export const BoardBox = styled.div`
  width: 100%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 열
  gap: 10px; // 각 열과 행 사이의 간격 조절

  flex-direction: center;
  justify-content: center;
  cursor: pointer;
`;
export const Board = styled.div`
  z-index: 3;
  background-image: url("board/card.png");
  width: 9.9rem;
  height: 12.7rem;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 추가 */
  text-align: center;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 아래쪽 정렬 추가 */
  text-align: left; /* 왼쪽 정렬 추가 */
  color: #dcdcdc;

  /* 그라데이션을 직접 배경으로 추가 */
  background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #0b0b0b 100%),
    url("board/card.png");

  &:nth-child(2),
  &:nth-child(4) {
    margin-top: 110px;
  }

  &:nth-child(6),
  &:nth-child(8),
  &:nth-child(10) {
    margin-top: -110px;
  }

  &:hover {
    background-size: 90%; /* hover 시 배경 이미지 크기를 110%로 확대 */
  }
`;

export const BoardTop = styled.div`
  width: 100%;
  height: 3.1rem;
`;

export const BoardSaveBack = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 10px;
  background-color: #141414;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveIcon = styled(Save)`
  fill: #ff6f00;
  cursor: pointer;
  z-index: 4;
  position: absolute;
  top: 20px;
  left: 150px;
  bottom: 202px;
  right: 16px;
`;

export const BoardTitle = styled.p`
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
`;

export const BoardContents = styled.p`
  font-size: 0.69rem;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
`;
