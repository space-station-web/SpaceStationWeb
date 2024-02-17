import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 50px 0 0px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchFullContainer = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterContainer = styled.div`
  width: 65%;
  display: flex;
`;

export const FilterTitleButton = styled.button`
  width: 3.8rem;
  height: 1.5rem;

  border: none;
  border-radius: 40px;
  background: var(--Primary-Black, #141414);
  color: #8c8c8c;
  font-size: 0.654rem;

  cursor: pointer;
  margin-right: 12px;
`;
export const FilterAuthorButton = styled.button`
  width: 3.8rem;
  height: 1.5rem;

  border: none;
  border-radius: 40px;
  background: var(--Primary-Black, #141414);
  color: #8c8c8c;
  font-size: 0.654rem;

  cursor: pointer;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchBtnImage = styled.img`
  margin-right: 18px;
`;

export const SearchInput = styled.input`
  width: 1400px;
  height: 50px;
  background: none;
  border: none;
  color: #8c8c8c;
  padding: 0 13px 0 13px;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #b4b4b4;
  margin: 15px 0 60px 0;
`;

export const KeywordHistoryContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const KeywordHistoryTitle = styled.p`
  color: #8c8c8c;
  margin-bottom: 22px;
`;

export const KeywordHistoryBox = styled.div`
  width: 4.9rem;
  height: 1.5rem;
  display: flex;
  padding: 0 7px 0 7px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid #8c8c8c;
  background-color: #1e1e1e;
  color: #dcdcdc;
`;

export const Keyword = styled.p`
  color: #dcdcdc;
  margin-right: 12px;
  font-size: 0.6rem;
`;

export const DeleteBtn = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;

export const SearchResultContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 4개의 컬럼으로 나눕니다.
  grid-gap: 20px; // 그리드 아이템 사이의 간격을 설정합니다.
  padding: 10px 0 0 0; // 여백을 추가합니다.
`;

export const Board = styled.div`
  z-index: 3;
  background-image: url("/board/card.png");

  width: 9.9rem;
  height: 12.7rem;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 추가 */
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 아래쪽 정렬 추가 */
  text-align: left; /* 왼쪽 정렬 추가 */
  color: #dcdcdc;

  /* 그라데이션을 직접 배경으로 추가 */
  background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #0b0b0b 100%),
    url("board/card.png");

  background-size: cover;
  transition: background-size 1s ease-in-out;
  &:hover {
    background-size: 110%; /* hover 시 배경 이미지 크기를 110%로 확대 */
  }
`;
