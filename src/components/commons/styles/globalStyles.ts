import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myFont";
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts.RobotoMono-VariableFont_wght.ttf");
  }
`;

export const globalWrapper = styled.div`
  padding-bottom: 813px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const globalRadial = styled.div`
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
