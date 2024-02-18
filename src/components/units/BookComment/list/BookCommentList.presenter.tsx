import type { IBoardCommentList } from "./BookComment.types";
import * as L from "./BookCommentList.styles";

export default function BookCommentListUI(
  props: IBoardCommentList,
): JSX.Element {
  return (
    <div>
      <L.Wrapper>
        <L.CommentListContainer>
          {props.comments && props.comments.length > 0 ? (
            props.comments.map((el) => (
              <L.CommentContainer key={el.post_reply_id}>
                <L.UserImg src="/boardComment/Icon.png" />
                <L.CommentDiv>
                  <L.UserName>{el.user_id}</L.UserName>
                  <L.Comment>{el.content}</L.Comment>
                </L.CommentDiv>
                <L.Delete id={el.post_reply_id} onClick={props.onClickDelete}>
                  X
                </L.Delete>
              </L.CommentContainer>
            ))
          ) : (
            <></>
          )}
        </L.CommentListContainer>
      </L.Wrapper>
    </div>
  );
}
