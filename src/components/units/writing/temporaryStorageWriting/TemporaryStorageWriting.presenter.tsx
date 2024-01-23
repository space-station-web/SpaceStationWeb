import React, { useState } from 'react';
import * as F from "./TemporaryStorageWriting.styles";
import type { ITemporaryStorage } from "./TemporaryStorageWriting.types";


export default function ITemporaryStorageWritingUI(props: ITemporaryStorage): JSX.Element {
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
            <F.Title>이 페이지 아님</F.Title>
            <F.DeleteBtn>
              삭제
            </F.DeleteBtn>
            </F.Line>
          </F.OneForm>
          <F.OneForm>
            <F.Line>
            <F.Date>2023.12.02</F.Date>
            <F.Title>이 페이지 아님</F.Title>
            <F.DeleteBtn>
              삭제
            </F.DeleteBtn>
            </F.Line>
          </F.OneForm>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
