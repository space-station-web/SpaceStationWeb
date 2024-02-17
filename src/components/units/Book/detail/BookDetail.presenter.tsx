import { useEffect, useState } from "react";
import * as L from "../../Board/detail/BoardDetail.styled";

import { useRouter } from "next/router";
import BookModal from "../../Board/detail/BoardModal";
import type { IBookDetailUIProps } from "./BookDetail.types";

export default function BoardDetailUI(props: IBookDetailUIProps): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isStored, setIsStored] = useState<boolean>(false);
  const router = useRouter();

  // 글 수정, 글 삭제 모달
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = (): void => {
    setIsModalVisible((prev) => !prev);
  };
  // ------------------------

  useEffect(() => {
    // props로 받은 isStored 상태를 로컬 상태에 반영
    setIsStored(props.isStored);
  }, [props.isStored]);

  const handleSaveButtonClick = async (): Promise<void> => {
    await props.storePost(); // 게시글 보관 API 호출
    setIsStored((prev) => !prev); // 버튼 색상 변경을 위한 상태 업데이트
  };

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

  const firstData = props.data;
  console.log(props.data);

  return (
    <>
      {mounted && (
        <L.Wrapper>
          <L.TopDiv>
            <L.Prev
              src="/common/icon/Arrow 2.png"
              onClick={() => {
                void router.push("/books");
              }}
            />
            <L.ShareBtn>인용하기</L.ShareBtn>
          </L.TopDiv>
          <L.BoardWrapper>
            {/* modal */}
            <L.BookModalContainer>
              {isModalVisible && <BookModal onClose={toggleModal} />}
            </L.BookModalContainer>
            {/*  */}
            <L.TopBoard>
              <L.UserBox>
                <L.UserProfile src="/common/icon/User.png" />
                <L.UserName>{firstData?.nickname}</L.UserName>
              </L.UserBox>
              <L.MoreIcon onClick={toggleModal} />
            </L.TopBoard>

            <L.BoardMiddle>
              <L.BoardTopContainer>
                <L.Title>{firstData?.title}</L.Title>
                <L.CreateAt>
                  {formatDate(firstData?.like ?? "날짜 정보 없음")}
                </L.CreateAt>
              </L.BoardTopContainer>
              <L.ImageBox
              // style={firstData?.image_url ? {} : { display: "none" }}
              >
                {/* {firstData?.image_url?.map((url, index) => (
                  <L.Image key={index} src={url} />
                ))} */}
              </L.ImageBox>
              <L.Contents>{firstData?.intro}</L.Contents>
            </L.BoardMiddle>

            <L.BoardBottom>
              <L.CommentToggle onClick={props.onClickCommentToggle}>
                댓글보기
              </L.CommentToggle>
              <L.IconContainer>
                <L.LikeIcon
                  onClick={props.onClickLike}
                  fill={firstData?.like ? "#ff6f00" : "none"}
                />
                <L.CountLike>{firstData?.likeCount}</L.CountLike>
                <L.SaveButton
                  onClick={handleSaveButtonClick}
                  fill={isStored ? "#ff6f00" : "none"}
                />
              </L.IconContainer>
            </L.BoardBottom>
          </L.BoardWrapper>
        </L.Wrapper>
      )}
    </>
  );
}
