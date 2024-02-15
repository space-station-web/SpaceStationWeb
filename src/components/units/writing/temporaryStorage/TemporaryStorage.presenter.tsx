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
  async function fetchDraftId() {
    try {
        const response = await fetch('/drafts'); // 임시 저장 전체 목록을 가져오는 엔드포인트에 요청
        if (response.ok) {
            const data = await response.json();
            return data.draftId;
        } else {
            console.error('글 정보를 가져오는데 실패했습니다 1.');
            return null;
        }
    } catch (error) {
        console.error('글 정보를 가져오는데 실패했습니다 2.', error);
        return null;
    }
}

const handleDeleteConfirmation = async () => {
    try {
        const draftId = await fetchDraftId(); // 임시 저장의 draftId를 가져옴
        if (draftId) {
            const response = await fetch(`/drafts/${draftId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('글 삭제 !!');
            } else {
                console.error('글 삭제 실패 1.');
            }
        } else {
            console.error('draftId를 가져오는데 실패했습니다.');
        }
    } catch (error) {
        console.error('글 삭제 실패 2.', error);
    }
    setIsDeleteModalOpen(false);
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
