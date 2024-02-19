import type { IBookCommentList } from "./BookComment.types";
import * as L from "./BookCommentList.styles";

export default function BookCommentListUI(
  props: IBookCommentList,
): JSX.Element {
  return (
    <div>
      <L.Wrapper>
        <L.CommentListContainer>
          {props.comments && props.comments.length > 0 ? (
            props.comments.map((el) => (
              <L.CommentContainer key={el.book_reply_id}>
                <L.UserImg src="/boardComment/Icon.png" />
                <L.CommentDiv>
                  <L.UserName>{el.nickname}</L.UserName>
                  <L.Comment>{el.content}</L.Comment>
                </L.CommentDiv>
                <L.Delete
                  id={String(el.book_reply_id)}
                  onClick={props.onClickDelete}
                >
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
