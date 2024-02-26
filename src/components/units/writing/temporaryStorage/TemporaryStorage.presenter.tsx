import React, { useState } from 'react';
import * as F from "./TemporaryStorage.styles";
import type { ITemporaryStorage } from "./TemporaryStorage.types";

interface TemporaryStorageUIProps extends ITemporaryStorage {
  onClickMoveWriting: (draftId: string) => void; 
  temporaryStorageCount: number;
}

export default function TemporaryStorageUI(props: TemporaryStorageUIProps): JSX.Element {
  const truncateContent = (
    content: string | undefined,
    maxLength: number = 13,
  ): string => {
    // 내용이 falsy 값인 경우 (undefined, null, 빈 문자열 등), 빈 문자열을 반환합니다.
    if (content === null || content === undefined || content === "") return "";

    // 내용이 최대 길이보다 길면, 잘라내고 "..."를 추가합니다.
    return content.length > maxLength
      ? content.slice(0, maxLength) + "..."
      : content;
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleNoBtnClick = () => {
    setIsDeleteModalOpen(false);
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${String(currentDate.getDate()).padStart(2, '0')}`;

  return (
    <>
      <F.Wrapper>
        <F.backBtn onClick={props.onClickMoveWrite}></F.backBtn>
        <F.Form>
          <F.FormHeader>
            <F.FormHeaderWrite>임시저장 글</F.FormHeaderWrite>
            <F.FormHeaderNum>총 {props.temporaryStorageCount}개</F.FormHeaderNum>
          </F.FormHeader>
          
          {props.posts.map((el) => ( // 각 게시물마다 새로운 OneForm 생성
            <F.OneForm key={el.user_id}>
              <F.Line>
                <F.Date>{formattedDate}</F.Date>
                <F.Title 
                  id={el.user_id.toString()}
                  onClick={() => props.onClickMoveWriting(el.user_id.toString())}>
                  {truncateContent(el.title)}
                </F.Title> 
                <F.DeleteBtn onClick={handleDeleteModal}>
                  삭제
                </F.DeleteBtn>
              </F.Line>
            </F.OneForm>
          ))}

          {isDeleteModalOpen && (
            <F.DelModalWrapper>
              <F.DelModalText>삭제하시겠습니까?<br />삭제된 글은 복구되지 않습니다.</F.DelModalText>
              <F.DelModalYesBtn>
                <F.DelModalYesText>예</F.DelModalYesText>
              </F.DelModalYesBtn>
              <F.DelModalNoBtn onClick={handleNoBtnClick}>
                <F.DelModalNoText>아니요</F.DelModalNoText>
              </F.DelModalNoBtn>
            </F.DelModalWrapper>
          )}
        </F.Form>
      </F.Wrapper>
    </>
  );
}
