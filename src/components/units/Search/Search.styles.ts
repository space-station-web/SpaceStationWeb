import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0 0 3000px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchFullContainer = styled.div`
  width: 100%;
  background-color: red;
`;

export const FilterContainer = styled.div``;

export const FilterButton = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 40px;
  background: var(--Primary-Black, #141414);
  color: #8c8c8c;
  font-size: 17px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 30px;
`;

export const SearchBtnImage = styled.img`
  margin-right: 18px;
`;

export const SearchInput = styled.input`
  width: 1300px;
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
