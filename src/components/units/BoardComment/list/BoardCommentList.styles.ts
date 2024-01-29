import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 200px 20px 200px;
  background-color: #141414;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentListContainer = styled.div`
  width: 1200px;
  background-color: #1e1e1e;
  border-radius: 20px;
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
`;

export const UserImg = styled.img``;

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const UserName = styled.p`
  color: #8c8c8c;
  font-size: 17px;
  font-weight: 600;
`;

export const Comment = styled.p`
  color: #b4b4b4;
  font-size: 17px;
  font-weight: 600;
  line-height: 25px; /* 147.059% */
`;
