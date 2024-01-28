import { useEffect, useState } from "react";
import * as L from "./BoardDetail.styled";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <L.Wrapper>
          <L.TopDiv>
            <L.Prev
              src="/common/icon/Arrow 2.png"
              onClick={props.onClickBoards}
            />
            <L.ShareBtn>인용하기</L.ShareBtn>
          </L.TopDiv>
          <L.BoardWrapper>
            <L.TopBoard>
              <L.UserProfile src="/common/icon/User.png" />
              <L.UserName>{props.data?.UserId}</L.UserName>
            </L.TopBoard>

            <L.BoardMiddle>
              <L.Title>{props.data?.title}</L.Title>
              <L.ImageBox>
                <L.Image src="/common/exImage.png" />
              </L.ImageBox>
              <L.Contents>{props.data?.content}</L.Contents>
            </L.BoardMiddle>

            <L.BoardBottom>
              <L.CommentToggle onClick={props.onClickCommentToggle}>
                댓글보기
              </L.CommentToggle>
              <L.SaveButton src="/common/icon/save.png" />
            </L.BoardBottom>
          </L.BoardWrapper>
        </L.Wrapper>
      )}
    </>
  );
}
