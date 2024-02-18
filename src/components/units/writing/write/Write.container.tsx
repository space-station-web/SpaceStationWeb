import { useRouter } from "next/router";
import React, { type ChangeEvent, useRef, useState, useEffect } from "react";
import WriteUI from "./Write.presenter";
import axios from 'axios';

export default function Write(): JSX.Element {
  const [_userId, setUserId] = useState("");
  const [_title, setTitle] = useState("");
  const [_content, setContent] = useState("");

  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(0);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>([]);

  // 임시저장 팝업창
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);

  const [visibility, setVisibility] = useState('전채공개');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // 토큰
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // 글감 제공
  const [topicId, setTopicId] = useState(-1);
  const [todayTopic, setTodayTopic] = useState("");
  const [todayContent, setTodayContent] = useState("");

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem("accessToken");
    const refresh = window.localStorage.getItem("refreshToken");
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId !== null) {
      setUserId(userId);
    }
  }, []);

  // 임시저장 
  const handleTemporaryStorageClick = async (): Promise<void> => {
    setTemporaryStorageCount(temporaryStorageCount + 1);
    console.log(temporaryStorageCount);
    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);
    try {
      const user_id = _userId;
      const title = _title;
      const content = _content;
      // const images = _images;
      // const topic_id = _topicId;
      const response = await axios.post(
        'http://localhost:8080/drafts',
        {
          user_id,
          title,
          content
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            Refresh: refreshToken
          }
        }
      );
      console.log("res", response);
      const isSuccess = response.data.isSuccess === true;
      if (isSuccess) {
        console.log('임시저장 요청 성공');
        setIsTempSaveAlertVisible(true);
        setTimeout(() => {
          setIsTempSaveAlertVisible(false);
      }, 2000);
      } else {
        console.log('임시저장 요청 false');
      }

      // onClickMoveTemStorage();
  } catch (error) {
      console.error('임시저장 실패:', error);
  }
    // setIsTempSaveAlertVisible(true);
    // console.log('temporaryStorageAlert');
    // setTimeout(() => {
    //   setIsTempSaveAlertVisible(false);
    // }, 2000);
  };

  // 발행하기 버튼
  const handlePublishClick = async (): Promise<void> => {
    setIsAlertVisible(true);
    try{
      const title = _title;
      const content = _content;

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
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            Refresh: refreshToken
          }
        },
      );
      console.log(response);
      alert("ok")
    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  // 오늘의 글감
  const onClickCreateRecommand = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:8080/posts/topics`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            Refresh: refreshToken
          }
        }
      );
      // setResult(response.data);
      console.log("result ::::: ", response); // 잘 들어옴
      const isSuccess = response.data.isSuccess === true;
      if (isSuccess) {
        console.log('글감 요청 성공');
        setTopicId(response.data.result.topic_id)
        setTodayTopic(response.data.result.todaytopic);
        setTodayContent(response.data.result.content);
        setIsComponentVisible(!isComponentVisible);
      }
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생", error);
    }
    
    
    // await router.push("../../../../../../write/CreateRecommand");
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 클릭
  const onImageClick = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };
  // 이미지 넣기
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files !== null && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };
  // 입력값
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.currentTarget.value);
  };
  // 페이지 이동
  const onClickMoveHomePage = async (): Promise<void> => {
    await router.push("../../../../../../");
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
      onClickMoveHomePage={onClickMoveHomePage}
      onClickMoveTemStorage={onClickMoveTemStorage}
      onClickCreateRecommand={onClickCreateRecommand}
      onClickPluseTemStorage={onClickPluseTemStorage}
      onImageClick={onImageClick}

      onFileInputChange={onFileInputChange}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      handleTemporaryStorageClick={handleTemporaryStorageClick}
      handlePublishClick={handlePublishClick} // handlePublishClick 추가
      temporaryStorageCount={temporaryStorageCount}

      isComponentVisible={isComponentVisible}
      isAlertVisible={isAlertVisible}
      isTempSaveAlertVisible={isTempSaveAlertVisible}

      selectedImages={selectedImages} 

      fileInputRef={fileInputRef}

      _title={_title}
      _content={_content}

      todayTopic={todayTopic}
      todayContent={todayContent}
    />
  </>
);

}
