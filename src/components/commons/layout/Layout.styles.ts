import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  z-index: 0;
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
`;
export const BackgroundTopImg = styled.div`
  position: absolute;
  background-image: url("/common/background_top.png ");
  width: 36px;
  height: 314px;
`;
export const BackgroundBottomImg = styled.div`
  position: absolute;
  bottom: 0;
  background-image: url("/common/background_bottom.png ");
  width: 36px;
  height: 314px;
`;
export const Divider = styled.div`
  width: 1703px;
  border: 1px solid #646464;
  position: absolute;
  bottom: 688px;
`;
