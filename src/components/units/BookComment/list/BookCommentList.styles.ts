import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 200px 20px 200px;
  background-color: #0a0a0a;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentListContainer = styled.div`
  width: 46.1rem;
  background-color: #1e1e1e;
  border-radius: 20px;
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 21px;
  border-bottom: 0.5px solid #0a0a0a;
`;

export const UserImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const UserName = styled.p`
  color: #8c8c8c;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Comment = styled.p`
  color: #b4b4b4;
  font-size: 0.65rem;
  font-weight: 600;
  line-height: 25px; /* 147.059% */
`;

export const Delete = styled.button`
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: #8c8c8c;
  background-color: #1e1e1e;
  border: none;
  margin-left: 38.5rem;
  cursor: pointer;
`;
