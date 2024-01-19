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
  padding-right: 40px;
`;
export const MessageWrapper = styled.div`
  padding-top: 14.5px;
  padding-bottom: 15.5px;
  padding-right: 40px;
  cursor: pointer;
  border-bottom: 1.5px solid #b4b4b4;
`;
export const CheckRead = styled.div<{ $isRead: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isRead ? "#B4B4B4" : "#FF6F00")};
`;
