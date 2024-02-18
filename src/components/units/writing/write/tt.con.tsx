import { useRouter } from "next/router";
import WriteUI from "./Write.presenter";
import TemporaryStorageUI from '../temporaryStorage/TemporaryStorage.presenter';
import { useEffect, useState, ChangeEvent, useRef } from "react";
import axios from "axios";

interface Props {
  user_id: number;
}

export default function Write(): JSX.Element {
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>([]);
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string>('');
  const [visibility, setVisibility] = useState('전채공개');
  const [result, setResult] = useState<{ todaytopic?: string; content?: string }>();
  const router = useRouter();

  useEffect(() => {
    onClickCreateRecommand(); 
  }, []);

  // 임시저장 버튼
  const handleTemporaryStorageClick = async () => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
    setIsTempSaveAlertVisible(true);
    setTimeout(() => {
      setIsTempSaveAlertVisible(false);
    }, 2000);
    console.log(temporaryStorageCount);
    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);
    try {
      const response = await axios.post(
        "http://localhost:8080/drafts",
        {
          topic_id: 123,
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksIm1haWwiOiJhbGxseUBleGFtcGxlLmNvbSIsImlhdCI6MTcwODE4NzMyMywiZXhwIjoxNzA4MTk4MTIzfQ.A3bJ82Ub7Nt9sHwU5Vi2T1fRVfAEmYFOgqp38HFuGZs",
            refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxODczMjMsImV4cCI6MTcwOTM5NjkyM30.lgyZ0McXtXOwaeNrBwFGKrJBJIcsWE4_Cugd3bSmSaY",
          },
        }
      );
      console.log(response.data); 
    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  // 발행하기 버튼
  const handlePublishClick = async (): Promise<void> => {
    setIsAlertVisible(true);
    try{
      const response = await axios.post(
        "http://localhost:8080/posts",
        {
          topic_id: 123,
          title,
          content,
          visibility,
          images: selectedImages, 
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksIm1haWwiOiJhbGxseUBleGFtcGxlLmNvbSIsImlhdCI6MTcwODE4NzMyMywiZXhwIjoxNzA4MTk4MTIzfQ.A3bJ82Ub7Nt9sHwU5Vi2T1fRVfAEmYFOgqp38HFuGZs",
            refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxODczMjMsImV4cCI6MTcwOTM5NjkyM30.lgyZ0McXtXOwaeNrBwFGKrJBJIcsWE4_Cugd3bSmSaY",
          },
        },
      );
      console.log(response);
      alert("ok")
    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  // 이미지 삽입
  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
  
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  // 글감제공
  const onClickCreateRecommand = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:8080/posts/topics`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksIm1haWwiOiJhbGxseUBleGFtcGxlLmNvbSIsImlhdCI6MTcwODE4NzMyMywiZXhwIjoxNzA4MTk4MTIzfQ.A3bJ82Ub7Nt9sHwU5Vi2T1fRVfAEmYFOgqp38HFuGZs",
            refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxODczMjMsImV4cCI6MTcwOTM5NjkyM30.lgyZ0McXtXOwaeNrBwFGKrJBJIcsWE4_Cugd3bSmSaY",
          },
        },
      );
      setResult(response.data);
      console.log("result ::::: ", result); //잘 들어옴
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생", error);
    }
  };
  
  // 이미지 클릭
  const onImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const onChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.currentTarget.value);
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

  return (
    <>
      <WriteUI
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        onClickMoveHomePage={onClickMoveHomePage}
        onClickMoveTemStorage={onClickMoveTemStorage}
        onClickCreateRecommand={onClickCreateRecommand}
        onClickPluseTemStorage={onClickPluseTemStorage}
        handleTemporaryStorageClick={handleTemporaryStorageClick}
        handlePublishClick={handlePublishClick} 
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        temporaryStorageCount={temporaryStorageCount}
        onFileInputChange={onFileInputChange}
        onImageClick={onImageClick}
        fileInputRef={fileInputRef}
        selectedImages={selectedImages} 
        result={result} 
      />
    </>
  );

}