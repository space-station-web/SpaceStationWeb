import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 200px 13px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Prev = styled.img`
  width: 1.23rem;
  height: 1.23rem;
  float: left;
`;

export const CategoryDiv = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CategoryContainer = styled.div`
  width: 80px;
  height: 4.5rem;
  border: none;

  margin: 0 38px 0 38px;

  cursor: pointer;
  z-index: 100;
`;

export const CategoryIcon = styled.img`
  width: 2.7rem;
  height: 2.7rem;
`;

export const CategoryName = styled.p`
  color: #b4b4b4;
  font-size: 0.65rem;
  font-weight: 600;

  text-align: center;
  margin-top: 15px;
`;

export const BoardBox = styled.div`
  width: 55%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 열
  gap: 25px; // 각 열과 행 사이의 간격 조절

  flex-direction: center;
  justify-content: center;
`;
export const Board = styled.div`
  z-index: 1000;
  width: 11rem;
  height: 23rem;
  border-radius: 20px;
  border: 1px solid white;
  background-color: #e7e6e6;

  display: flex;
  flex-direction: column;
  text-align: left; /* 왼쪽 정렬 추가 */
  color: #dcdcdc;

  &:nth-child(2),
  &:nth-child(4) {
    margin-top: 110px;
  }

  &:nth-child(6),
  &:nth-child(8),
  &:nth-child(10) {
    margin-top: -110px;
  }
`;

export const BoardImage = styled.img`
  width: 100%;
  height: 14.9rem;
  img {
    box-shadow: 0px 5px 4.5px 1px rgba(0, 0, 0, 0.09);
  }
`;

export const BoardBottom = styled.div`
  width: 100%;
  padding: 20px;
`;

export const BoardCategory = styled.p`
  font-size: 0.57rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #8c8c8c;
  margin-bottom: 5px;
`;

export const BoardTitle = styled.p`
  font-size: 0.76rem;
  font-style: normal;
  font-weight: 600;
  color: #1e1e1e;

  margin-bottom: 10px;
`;

export const BoardSubTitle = styled.p`
  color: #8c8c8c;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const BoardContents = styled.p`
  font-size: 0.57rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: #8c8c8c;
`;
