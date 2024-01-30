import { useEffect, useState } from "react";
import * as L from "./BoardDetail.styled";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 날짜를 'YYYY/MM/DD' 형식으로 변환하는 함수
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString)
      .toLocaleDateString("ko-KR", options)
      .replace(/\.\s/g, "/") // 마침표와 공백을 슬래시로 교체
      .slice(0, -1); // 문자열 끝의 슬래시 제거
  };

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
              <L.BoardTopContainer>
                <L.Title>{props.data?.title}</L.Title>
                <L.CreateAt>
                  {props.data?.createdAt
                    ? formatDate(props.data.createdAt)
                    : "날짜 정보 없음"}
                </L.CreateAt>
              </L.BoardTopContainer>
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
