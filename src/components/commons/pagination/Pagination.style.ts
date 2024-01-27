import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageNumContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  padding-bottom: 50px;
`;

interface PageNumberProps {
  active: boolean;
}

export const PageNumber = styled.div<PageNumberProps>`
  text-align: center;
  line-height: 30px;

  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin: 5px;

  font-size: 18px;
  color: #8c8c8c;

  cursor: pointer;

  ${props => props.active && css`
    /* 활성화된 페이지 번호에 대한 스타일 */
    font-weight: bold;
    color: white;
    /* 여기에 필요한 스타일 추가 */
  `}
`;
