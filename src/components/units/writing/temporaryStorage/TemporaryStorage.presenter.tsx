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
  return (
    <>
      <F.Wrapper>
      <F.backBtn onClick={props.onClickMoveWrite}>
          </F.backBtn>
        <F.Form>
          <F.FormHeader>
            <F.FormHeaderWrite>임시저장 글</F.FormHeaderWrite>
            {/* <F.FormHeaderNum>총 {props.temporaryStorageCount}개</F.FormHeaderNum> */}
            <F.FormHeaderNum>총 1개</F.FormHeaderNum>
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
          {/*  <F.OneForm>
           <F.Line>
            <F.Date>2023.12.02</F.Date>
            <F.Title>크리스마스 준비 🎄</F.Title>
            <F.DeleteBtn>
              삭제
            </F.DeleteBtn>
             </F.Line> 
        
           
          </F.OneForm>*/}
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
