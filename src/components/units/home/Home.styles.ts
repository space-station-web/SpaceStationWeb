import styled from "@emotion/styled";

export const Group = styled.div<{ $gap?: string }>`
  display: flex;
  gap: ${(props) => props.$gap};
`;
export const Stack = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

export const Wrapper = styled.div`
  padding-bottom: 100px;
  z-index: 1;
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
  width: 6.1rem;
  height: 1.9rem;
  border-radius: 999px;
  border: none;
  background-color: #141414;
  color: #e0e0e0;
  font-size: 0.76rem;
  cursor: pointer;
  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
export const ContentsBtn = styled.button`
  width: 4.93rem;
  height: 1.53rem;
  border-radius: 999px;
  border: 1px solid #e0e0e0;
  background-color: transparent;
  color: #e0e0e0;
  font-size: 0.76rem;
  cursor: pointer;
  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
export const Balloon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 18px;
  width: 16.5rem;
  height: 2rem;
  background: #0e0e0e;
  border-radius: 20px;
  border-top-left-radius: 0px;
  :after {
    border-top: 0px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 17px solid #0e0e0e;
    border-top-right-radius: 20px;
    content: "";
    position: absolute;
    top: -17px;
    left: 0px;
  }
`;
export const SubTitle = styled.div`
  font-size: 0.69rem;
  color: #bdbdbd;
`;
export const Title = styled.div`
  font-size: 0.769rem;
  color: #e0e0e0;
`;
export const SubBody = styled.div`
  font-size: 0.65rem;
  color: #757575;
`;
