import type { IBoardCommentList } from "./BoardComment.types";
import * as L from "./BoardCommentList.styles";

export default function BoardCommentListUI(
  props: IBoardCommentList,
): JSX.Element {
  return (
    <div>
      <L.Wrapper>
        <L.CommentListContainer>
          {props.comments.map((el) => (
            <L.CommentContainer key={el.id}>
              <L.UserImg src="/boardComment/Icon.png" />
              <L.CommentDiv>
                <L.UserName>{el.UserId}</L.UserName>
                <L.Comment>{el.content}</L.Comment>
              </L.CommentDiv>
            </L.CommentContainer>
          ))}
        </L.CommentListContainer>
      </L.Wrapper>
    </div>
  );
}
