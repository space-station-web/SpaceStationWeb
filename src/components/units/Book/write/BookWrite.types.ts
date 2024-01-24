import type { ChangeEvent, MouseEvent, RefObject } from "react";


export interface IBookWriteProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: (event: MouseEvent<HTMLDivElement>) => void
  fileRef: RefObject<HTMLInputElement>
  imageUrl: string
}