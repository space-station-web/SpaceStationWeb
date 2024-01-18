import styled from "@emotion/styled";

export const Group = styled.div<{ $gap?: string }>`
  display: flex;
  gap: ${(props) => props.$gap};
`;
export const Stack = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  z-index: 3;
`;

export const Wrapper = styled.div`
  padding-bottom: 813px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Radial = styled.div`
  position: absolute;
  background: radial-gradient(
    41.54% 52.48% at 50.04% 49.95%,
    rgba(255, 255, 255, 0.17) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 1459px;
  height: 1172px;
  z-index: 1;
  top: 65px;
`;
export const BackgroundCircle = styled.div`
  width: 1194px;
  height: 1194px;
  flex-shrink: 0;
  border-radius: 1194px;
  background: linear-gradient(180deg, #0e0e0e 0%, rgba(19, 17, 17, 0) 100%);
  filter: blur(5px);
  position: absolute;
  margin-top: 667px;
  z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 18px;
  width: 431px;
  height: 52px;
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
export const Divider = styled.div`
  width: 1703px;
  border: 1px solid #646464;
  position: absolute;
  bottom: 688px;
`;
