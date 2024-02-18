import { useState, type ChangeEvent, useRef } from "react";
import BookWriteUI from "./BookWrite.presenter";

export default function BookWrite(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)

  // 이미지 등록
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>):void => {
    const file = event.target.files?.[0]
    console.log(file)
    // setImageUrl(file)
  }

  const onClickImage = (): void => {
    fileRef.current?.click()
  }

  return (
    <BookWriteUI onChangeFile={onChangeFile} onClickImage={onClickImage} fileRef={fileRef} imageUrl={imageUrl} />
  )
}
