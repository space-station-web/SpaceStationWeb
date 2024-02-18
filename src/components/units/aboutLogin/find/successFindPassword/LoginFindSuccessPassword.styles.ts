import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: 1;
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
  min-height: 23.1rem;
  border: 0.5px solid #757575;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.9rem 0 11.5rem 0;
  padding: 2.7rem;
`;

export const Icon = styled.img`
  margin-bottom: 2.3rem;
`;

export const Text = styled.p`
  font-size: 0.77rem;
  color: #e0e0e0;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.34rem;

  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  width: 22.4rem;
  height: 2.9rem;
  border-radius: 20px;
  border: none;

  margin-top: 5.57rem;
  font-size: 0.65rem;

  background-color: #0e0e0e;
  color: #e0e0e0;

  cursor: pointer;

  :hover {
    color: #1e1e1e;
    background-color: #e0e0e0;
  }
`;
