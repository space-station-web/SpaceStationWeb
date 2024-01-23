import React, { useState } from 'react';
import * as F from "./TemporaryStorage.styles";
import type { ITemporaryStorage } from "./TemporaryStorage.types";


export default function TemporaryStorageUI(props: ITemporaryStorage): JSX.Element {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.FormHeader>
            <F.FormHeaderWrite>임시저장 글</F.FormHeaderWrite>
            <F.FormHeaderNum>총 3개</F.FormHeaderNum>
          </F.FormHeader>
          <F.OneForm>
            <F.Line>
            <F.Date>2023.12.02</F.Date>
            <F.Title onClick={props.onClickMoveWriting}>크리스마스 준비 🎄</F.Title>
            <F.DeleteBtn onClick={handleDeleteModal}>
              삭제
            </F.DeleteBtn>
            </F.Line>
          </F.OneForm>
          <F.OneForm>
            <F.Line>
            <F.Date>2023.12.02</F.Date>
            <F.Title>크리스마스 준비 🎄</F.Title>
            <F.DeleteBtn>
              삭제
            </F.DeleteBtn>
            {isDeleteModalOpen && (
        <F.DelModalWrapper>
          <F.DelModalText>삭제하시겠습니까?<br />삭제된 글은 복구되지 않습니다.</F.DelModalText>
          <F.DelModalYesBtn>
            <F.DelModalYesText>예</F.DelModalYesText>
          </F.DelModalYesBtn>
          <F.DelModalNoBtn>
            <F.DelModalNoText>아니요</F.DelModalNoText>
          </F.DelModalNoBtn>
        </F.DelModalWrapper>
      )}
            </F.Line>
          </F.OneForm>
          
        </F.Form>
      </F.Wrapper>
      
    </>
  );
}
