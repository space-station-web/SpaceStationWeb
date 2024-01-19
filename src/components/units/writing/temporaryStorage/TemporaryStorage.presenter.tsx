import React, { useState } from 'react';
import * as F from "./TemporaryStorage.styles";
import type { ITemporaryStorage } from "./TemporaryStorage.types";

export default function TemporaryStorageUI(props: ITemporaryStorage): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.Form>
          <F.FormHeader>
            <F.FormHeaderWrite>임시저장 글</F.FormHeaderWrite>
            <F.FormHeaderNum>총 3개</F.FormHeaderNum>
          </F.FormHeader>
        </F.Form>
      </F.Wrapper>
    </>
  );
}
