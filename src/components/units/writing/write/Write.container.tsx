import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import WriteUI from "./Write.presenter";

export default function Write(): JSX.Element {
  const router = useRouter();

  const [_userId, setUserId] = useState("");
  const [_title, setTitle] = useState("");
  const [_content, setContent] = useState("");
  const [draftId, setDraftId] = useState(null);

  
  // 임시 저장 리스트 개수
  const [temporaryStorageCount, setTemporaryStorageCount] = useState(-1);
  const [temporaryStorageForms, setTemporaryStorageForms] = useState<number[]>(
    [],
  );

  // 임시저장 팝업창
  const [isTempSaveAlertVisible, setIsTempSaveAlertVisible] = useState(false);

  // 오늘의 글감
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const [visibility, setVisibility] = useState("전채공개");

  // 발행하기 팝업창
  // const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // 토큰
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // 글감 제공
  const [topicId, setTopicId] = useState(null);
  const [todayTopic, setTodayTopic] = useState("");
  const [todayContent, setTodayContent] = useState("");

  // formdata
  const formData = new FormData();

  useEffect(() => {
    // 임시저장 글 전체 조회
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get("http://localhost:8080/drafts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            Refresh: refreshToken,
          },
        });
        console.log(response);
        const isSuccess = response.data.isSuccess === true;
        if (isSuccess) {
          const result = response.data.result;
          setTemporaryStorageCount(result.length);
          console.log("임시저장 글 전체 조회 요청 성공");
        } else {
          console.log("임시저장 글 전체 조회 요청 false");
        }
      } catch (error: any) {
        alert(error.message); // 에러 처리
        console.log(error.message);
      }
    };

    void fetchData();
  }, [temporaryStorageCount]);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem("accessToken");
    const refresh = window.localStorage.getItem("refreshToken");
    setAccessToken(token);
    setRefreshToken(refresh);
    // localStorage에서 user_id을 가져와 상태에 저장
    const userId = window.localStorage.getItem("userId");
    if (userId !== null) {
      setUserId(userId);
    }
    setTemporaryStorageCount(0);
  }, []);

  

  // 임시저장
  const handleTemporaryStorageClick = async (): Promise<void> => {
    setTemporaryStorageCount(temporaryStorageCount + 1);

    setTemporaryStorageForms((prevForms) => [...prevForms, Date.now()]);

    console.log("selectedImages",selectedImages);

    try {
      const requestData = {
        user_id: _userId,
        title: _title,
        content: _content,
        topic_id: topicId,
        images: selectedImages
      };
      // const images = _images;
      if (draftId === null) {
        // 첫번째 임시 저장
        const response = await axios.post(
          "http://localhost:8080/drafts",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
              Refresh: refreshToken,
            },
          },
        );
        console.log("res", response);
        const isSuccess = response.data.isSuccess === true;
        if (isSuccess) {
          console.log("임시저장 요청 성공");
          setDraftId(response.data.result.draft_id);
          setIsTempSaveAlertVisible(true);
          setTimeout(() => {
            setIsTempSaveAlertVisible(false);
          }, 2000);
        } else {
          console.log("임시저장 요청 false");
        }
      } else {
        // 이후 임시 저장
        const response = await axios.patch(
          `http://localhost:8080/drafts/${draftId}`,
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
              Refresh: refreshToken,
            },
          },
        );
        console.log("res", response);
        const isSuccess = response.data.isSuccess === true;
        if (isSuccess) {
          console.log("임시저장 재요청 성공");
          setDraftId(response.data.result.draft_id);
          setIsTempSaveAlertVisible(true);
          setTimeout(() => {
            setIsTempSaveAlertVisible(false);
          }, 2000);
          alert("게시물이 임시저장 되었습니다.");
          void router.push("/write/TemporaryStorage");
        } else {
          console.log("임시저장 재요청 false");
        }
      }

      // onClickMoveTemStorage();
    } catch (error) {
      console.error("임시저장 실패:", error);
    }
    // setIsTempSaveAlertVisible(true);
    // console.log('temporaryStorageAlert');
    // setTimeout(() => {
    //   setIsTempSaveAlertVisible(false);
    // }, 2000);
  };

  // 발행하기 버튼
  const handlePublishClick = async (): Promise<void> => {
    // formData.append("title", title);
    // formData.append("title", title);
    // formData.append("title", title);
    // formData.append("title", title);
    // formData.append("title", title);
    try {
      const title = _title;
      const content = _content;

      const response = await axios.post(
        "http://localhost:8080/posts",
        {
          topic_id: topicId,
          title,
          content,
          visibility,
          images: selectedImages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            Refresh: refreshToken,
          },
        },
      );
      console.log(response);
      const isSuccess = response.data.isSuccess === true;
        if (isSuccess) {
          console.log("발행하기 요청 성공");
          // setIsAlertVisible(true);
          // setTimeout(() => {
          //   setIsAlertVisible(false);
          // }, 2000);
          alert("게시물 등록이 완료되었습니다.");
          void router.push("/boards");
        } else {
          console.log("발행하기 요청 false");
        }

    } catch (error: any) {
      alert(error.message); // 에러 처리
      console.log(error.message);
    }
  };

  // 오늘의 글감
  const onClickCreateRecommand = async (): Promise<void> => {
    try {
      const response = await axios.get(`http://localhost:8080/posts/topics`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          Refresh: refreshToken,
        },
      });
      // setResult(response.data);
      console.log("result ::::: ", response); // 잘 들어옴
      const isSuccess = response.data.isSuccess === true;
      if (isSuccess) {
        console.log("글감 요청 성공");
        setTopicId(response.data.result.topic_id);
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
  const onImageClick = (): void => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };
  // 이미지 넣기
  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>):void => {
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
  async function fetchDraftTitle(draftId: string): Promise<string | null> {
    try {
        const response = await fetch(`/drafts/${draftId}`);
        if (response.ok) {
            const data = await response.json();
            return data.title;
        } else {
            console.error('임시저장의 제목을 가져오는데 실패했습니다.');
            return null;
        }
    } catch (error) {
        console.error('임시저장의 제목을 가져오는데 실패했습니다.', error);
        return null;
    }
  }
  
  // 임시저장 이동
  const onClickMoveTemStorage = async (): Promise<void> => {

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
        // isAlertVisible={isAlertVisible}
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
