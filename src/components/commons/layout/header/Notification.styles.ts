import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 384px;
  height: 466px;
  border-radius: 20px;
  background-color: #dcdcdc;
  position: absolute;
  top: 90px;
  padding-top: 27px;
  padding-left: 22px;
  padding-right: 14px;
  
`;
export const MessageWrapper = styled.div`
  height: 330px;
  overflow-y: auto;
  scrollbar-gutter: stable;
  padding-right: 16px;
  

  &::-webkit-scrollbar {
    border-radius: 20px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #b4b4b4;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`;
export const MessageBox = styled.div`
  
  position: relative;
  padding-top: 14.5px;
  padding-bottom: 15.5px;
  padding-right: 40px;
  padding-left: 10px;
  border-bottom: 1.5px solid #b4b4b4;
  &:nth-child(1) {
    border-top: 1.5px solid #b4b4b4;
  }
`;
export const CheckRead = styled.div<{ $isRead: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isRead ? "#B4B4B4" : "#FF6F00")};
`;
