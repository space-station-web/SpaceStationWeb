import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 1194px;
  border-radius: 20px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 72px;
  margin: 400px;
`;
export const ProfileImg = styled.div`
  width: 138px;
  height: 138px;
  border-radius: 138px;
  background-color: #fff;
  margin-top: -119px;
`;
export const ProfileName = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 19px;
  margin-bottom: 38px;
`;
export const ProfileNameText = styled.div`
  font-size: 30px;
  color: #dcdcdc;
`;
export const TabBar = styled.div`
  width: 100%;
  display: flex;
`;
export const TabBarItem = styled.div`
  flex: 1;
  color: #dcdcdc;
  padding: 21px 149px;
  text-align: center;
  border-bottom: 1px solid;
`;
export const TabBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 63px;
  margin-top: 56px;
  padding: 0px 30px;
  /* gap: 204px; */
`;

export const StorageItem = styled.div`
  width: 100%;
  padding: 27px;
  padding-left: 103px;
  padding-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #8c8c8c;
`;

export const MyPageBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 130px;
  padding: 8.5px;
  border-radius: 999px;
  background-color: #dcdcdc;
  color: #1e1e1e;
`;

export const ModalBox = styled.div`
  width: 360px;
  background-color: #dcdcdc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 27px;
  padding-bottom: 48px;
`;

export const StorageTitleInput = styled.div`
  background-color: transparent;
  padding: 17px 23px;
  border: 2px solid #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  margin-top: 80px;
  margin-bottom: 68px;
`;
