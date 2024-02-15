import { useEffect, useState } from "react";
import * as L from "./BookDetail.styled";
import type { IBookDetailUIProps } from "./BookDetail.types";

export default function BookDetailUI(props: IBookDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const firstData = props.data?.result;
  console.log(firstData);
  return (
    <>
      {mounted && (
        <L.Wrapper>
          <L.TopDiv>
            <L.Prev src="/common/icon/Arrow 2.png" />
            <L.ShareBtn>인용하기</L.ShareBtn>
          </L.TopDiv>
          <L.BoardWrapper>
            <L.TopBoard>
              <L.UserProfile src="/common/icon/User.png" />
              <L.UserName>{firstData?.user_id}</L.UserName>
            </L.TopBoard>

            <L.BoardMiddle>
              <L.Title>{firstData?.title}</L.Title>
              <L.ImageBox>
                <L.Image src="/common/exImage.png" />
              </L.ImageBox>
              <L.Contents></L.Contents>
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
