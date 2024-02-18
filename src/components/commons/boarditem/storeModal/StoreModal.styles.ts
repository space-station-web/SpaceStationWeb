import styled from "@emotion/styled";

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 366px;
  border-radius: 20px;
  padding-bottom: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
  z-index: 100;
`;

export const StorageList = styled.div`
  width: 290px;
  padding-top: 56px;
  padding-bottom: 36px;
  margin-top: 34px;
  margin-bottom: 31px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;

export const StorageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #dcdcdc;
`;
export const RadioBtn = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RadioBtnSelected = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #0a0a0a;
`;
export const StoreBtn = styled.button`
  width: 290px;
  padding: 20px 0px;
  border-radius: 20px;
  background-color: #1e1e1e;
  color: #dcdcdc;
`;
