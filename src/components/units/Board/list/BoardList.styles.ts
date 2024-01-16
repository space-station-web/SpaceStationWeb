import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px 200px 3013px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Radial = styled.div`
  position: absolute;
  background: radial-gradient(
    41.54% 52.48% at 50.04% 49.95%,
    rgba(255, 255, 255, 0.17) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 1459px;
  height: 1172px;
  z-index: 1;
  top: 65px;
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
`;

export const Logo = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  float: center;
  margin-right: 48%;
`;

export const CategoryDiv = styled.div`
  width: 80%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.button`
  width: 10rem;
  height: 3.125rem;
  border: none;
  border-radius: 999px;
  margin: 0 20px 0 20px;
  background-color: #0a0a0a;
  color: #b4b4b4;
  font-size: 1.0625rem;
  font-weight: 600;

  cursor: pointer;
  z-index: 100;
`;

export const BoardBox = styled.div`
  width: 75%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 열
  gap: 25px; // 각 열과 행 사이의 간격 조절
`;
export const Board = styled.div`
  width: 18rem;
  height: 23.1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 추가 */
  text-align: center;
  width: 18rem;
  height: 23.1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 아래쪽 정렬 추가 */
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
