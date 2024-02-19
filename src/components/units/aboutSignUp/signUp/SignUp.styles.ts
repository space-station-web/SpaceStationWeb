import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 45.6rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Prev = styled.img`
  position: absolute;
  top: 11.5rem;
  left: 0;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;
export const Stack = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

export const Form = styled.div`
  z-index: 100;
  background-color: #1e1e1e;
  width: 30.2rem;
  min-height: 21.7rem;
  border: 0.5px solid #757575;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.9rem 0 11.5rem 0;
  padding: 2.7rem 2.7rem 0rem 2.7rem;
`;

export const Icon = styled.img`
  margin-bottom: 2.3rem;
`;

export const Heading1 = styled.p`
  font-size: 0.77rem;
  font-weight: 600;
  color: #dcdcdc;
  white-space: pre-wrap;
  text-align: center;
  line-height: 0.88rem;

  margin-bottom: 0.38rem;
`;

export const Heading2 = styled.p`
  font-size: 0.69rem;
  font-weight: 400;
  color: #b4b4b4;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.07rem;

  margin-bottom: 1.15rem;
`;

export const Button = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;
  font-size: 0.65rem;

  margin-top: 15px;

  background-color: #0e0e0e;
  color: #e0e0e0;

  cursor: pointer;
  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
