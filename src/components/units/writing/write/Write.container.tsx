import { useRouter } from "next/router";
import React, { useState } from 'react';
import WriteUI from "./Write.presenter";
import TemporaryStorageUI from '../temporaryStorage/TemporaryStorage.presenter';
import { Iwrite } from "./Write.types";

interface Props {
  user_id: number;
  title: string;
  content: string;
  visibility: string;
}

export default function Write(props: Props): JSX.Element {
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>([]);
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const router = useRouter();

  const handleTemporaryStorageClick = async () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
    console.log(temporaryStorageCount);
    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);
    try {
      const response = await fetch('/drafts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              Id: props.user_id,
              title: props.title,
              content: props.content,
              visibility: props.visibility,
          })
      });

      if (!response.ok) {
          throw new Error(`임시저장 실패: ${response.statusText}`);
      }

      setIsTempSaveAlertVisible(true);
      setTimeout(() => {
          setIsTempSaveAlertVisible(false);
      }, 2000);

      //props.onClickMoveTemStorage();
  } catch (error) {
      console.error('임시저장 실패:', error);
  }
    setIsTempSaveAlertVisible(true);
    console.log('temporaryStorageAlert');
    setTimeout(() => {
      setIsTempSaveAlertVisible(false);
    }, 2000);
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handlePublishClick = () => {
    setIsAlertVisible(true);

    // 글 작성 API 호출
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          Id: props.user_id,
          title: props.title,
          content: props.content,
          visibility: props.visibility,
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`'${props.title} ${props.content}' :: 문제 발생 ::`);
      }
      console.log(`'${props.title} ${props.content}' 글이 성공적으로 발행되었습니다.`);
    })
    .catch(error => {
      console.error('발행 에러 :: ', error);
    })
    .finally(() => {
      // 2초 뒤에 사라짐
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    });
  };

  const onClickMoveHomePage = async (): Promise<void> => {
    await router.push("../../../../../../Home");
  };

  const onClickMoveTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage");
  };
  const onClickPluseTemStorage = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStoragePluse");
  };
  const onClickCreateRecommand = async (): Promise<void> => {
    await router.push("../../../../../../write/CreateRecommand");
  };

  return (
  <>
    <WriteUI
      onClickMoveHomePage={onClickMoveHomePage}
      onClickMoveTemStorage={onClickMoveTemStorage}
      onClickCreateRecommand={onClickCreateRecommand}
      onClickPluseTemStorage={onClickPluseTemStorage}
      handleTemporaryStorageClick={handleTemporaryStorageClick}
      handlePublishClick={handlePublishClick} // handlePublishClick 추가
      temporaryStorageCount={temporaryStorageCount}
    />
  </>
);

}
