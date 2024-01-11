import styled from "@emotion/styled";

export const Group = styled.div<{ $gap: string }>`
  display: flex;
  gap: ${(props) => props.$gap};
`;
export const Stack = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

export const Wrapper = styled.div`
  background-position: top center;
  background-image: url("/common/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
export const Card = styled.div<{ $width: string; $height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 38px;
  box-sizing: border-box;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;
export const LoginBtn = styled.button`
  width: 163px;
  height: 51px;
  border-radius: 999px;
  border: none;
  background-color: #141414;
  color: #e0e0e0;
`;
export const ContentsBtn = styled.button`
  width: 128px;
  height: 39px;
  border-radius: 999px;
  border: 1px solid #e0e0e0;
  background-color: transparent;
  color: #e0e0e0;
  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
export const Balloon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
  margin-top: 18px;
  width: 431px;
  height: 52px;
  background: #0e0e0e;
  border-radius: 20px;
  border-top-left-radius: 0px;
  :after { 
    border-top:0px solid transparent; 
    border-right: 20px solid transparent;
    border-bottom: 17px solid #0e0e0e; 
    border-top-right-radius:20px;
    content:""; 
    position:absolute;
    top:-17px;
    left:0px; 
`;
export const SubTitle = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;
export const Title = styled.div`
  font-size: 20px;
  color: #e0e0e0;
`;
export const SubBody = styled.div`
  font-size: 17px;
  color: #757575;
`;
