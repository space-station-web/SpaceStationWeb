import styled from "@emotion/styled";
import Save from "../../../../public/save.svg";
export const MyWritting = styled.div<{ $imgUrl: string }>`
  position: relative;
  background-image: url(${(props) => props.$imgUrl});
  width: 288px;
  height: 371px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SaveBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;
export const IconSave = styled(Save)<{ $issave: boolean }>`
  fill: ${(props) => (props.$issave ? "#ff6f00" : "none")};
`;
export const MyWrittingInfoField = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: #1e1e1e80;
  justify-content: space-between;
  align-items: center;
`;

export const MyWrittingAuthor = styled.div`
  font-size: 15px;
  color: #b4b4b4;
`;

export const MyWrittingTitle = styled.div`
  font-size: 20px;
  color: #dcdcdc;
`;

export const OptionBox = styled.div`
  position: absolute;
  top: 332px;
  left: 276px;
  z-index: 1;
  border-radius: 20px;
  border: 1px solid #141414;
`;
export const OptionBtn = styled.div`
  color: #b4b4b4;
  font-size: 17px;
  width: 123px;
  height: 53px;
  background-color: #1e1e1e;
  text-align: center;
  line-height: 53px;
`;
export const Question = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 288px;
  height: 371px;
  border-radius: 20px;
  padding: 41px;
  padding-bottom: 18px;
  color: #dcdcdc;
  background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #0e0e0e 100%);
`;
