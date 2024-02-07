import React, { useState } from 'react';
import * as F from "./TemporaryStorage.styles";
import type { ITemporaryStorage } from "./TemporaryStorage.types";

interface TemporaryStorageUIProps extends ITemporaryStorage {
  onClickMoveWriting: () => void;
  temporaryStorageCount: number;
}

export default function TemporaryStorageUI(props: TemporaryStorageUIProps): JSX.Element {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}.${String(currentDate.getDate()).padStart(2, '0')}`;

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleNoBtnClick = () => {
    setIsDeleteModalOpen(false);
  };
  async function fetchPostId() {
    try {
      const response = await fetch('/posts'); // 서버의 API 엔드포인트에 요청을 보냅니다.
      if (response.ok) {
        const data = await response.json();
        return data.postId; // 서버에서 받은 데이터 중 postId를 반환합니다.
      } else {
        console.error('글 정보를 가져오는데 실패했습니다 1 .');
        return null;
      }
    } catch (error) {
      console.error('글 정보를 가져오는데 실패했습니다 2 .', error);
      return null;
    }
  }

  const handleDeleteConfirmation = async () => {
    try {
      const postId = await fetchPostId(); // postId를 가져옵니다.
      if (postId) {
        const response = await fetch(`/posts/${postId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          console.log('글 삭제 !!');
        } else {
          console.error('글 삭제에 실패했습니다.');
        }
      } else {
        console.error('postId를 가져오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('글 삭제에 실패했습니다.', error);
    }
    setIsDeleteModalOpen(false); // 모달을 닫습니다.
  };
  

  return (
    <>
      <F.Wrapper>
        <F.backBtn onClick={props.onClickMoveWrite}></F.backBtn>
        <F.Form>
          <F.FormHeader>
            <F.FormHeaderWrite>임시저장 글</F.FormHeaderWrite>
            <F.FormHeaderNum>총 {props.temporaryStorageCount}개</F.FormHeaderNum>
          </F.FormHeader>
          <F.OneForm>
            <F.Line>
              <F.Date>{formattedDate}</F.Date>
              <F.Title onClick={props.onClickMoveWriting}>크리스마스 준비 🎄</F.Title>
              <F.DeleteBtn onClick={handleDeleteModal}>
                삭제
              </F.DeleteBtn>
            </F.Line>
          </F.OneForm>
          {isDeleteModalOpen && (
            <F.DelModalWrapper>
              <F.DelModalText>삭제하시겠습니까?<br />삭제된 글은 복구되지 않습니다.</F.DelModalText>
              <F.DelModalYesBtn>
                <F.DelModalYesText onClick={handleDeleteConfirmation}>예</F.DelModalYesText>
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
