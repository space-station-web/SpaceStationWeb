import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0 0 1000px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchFullContainer = styled.div`
  width: 100%;
  height: 366px;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-right: 1250px;
`;

export const FilterTitleButton = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 40px;
  background: var(--Primary-Black, #141414);
  color: #8c8c8c;
  font-size: 17px;

  cursor: pointer;
  margin-right: 12px;
`;
export const FilterAuthorButton = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 40px;
  background: var(--Primary-Black, #141414);
  color: #8c8c8c;
  font-size: 17px;

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
  width: 1400px;
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
  width: 129px;
  height: 39px;
  display: flex;
  padding: 7px 30px;
  align-items: center;
  border-radius: 999px;
  border: 1px solid #8c8c8c;
  background-color: #1e1e1e;
  color: #dcdcdc;
`;

export const Keyword = styled.p`
  color: #dcdcdc;
  margin-right: 12px;
`;

export const DeleteBtn = styled.img``;
