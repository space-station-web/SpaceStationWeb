import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import TemporaryStorageUI from "./TemporaryStorage.presenter";

interface ModalComponentProps {
  onClose: () => void;
}
export interface Draft {
  user_id: number;
  title: string;
  content: string;
  images: string[];
}

export interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Draft[];
}

interface ITemporaryStorageProps {
  temporaryStorageCount: number;
  draftId: string; 
  title: string; 
}

const DRAFTS_PER_PAGE = 10; // 한 페이지당 임시저장 수

export default function TemporaryStorage(props: ITemporaryStorageProps): JSX.Element {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDraftId, setselectedDraftId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  const router = useRouter();
  const onClickMoveWrite = async (): Promise<void> => {
    await router.push("../../../../../../write");
  }; 

  // 삭제 로직 수행하는 함수
  const onClickDelete = async (): Promise<void> => {
    const { draft_id: draftId } = router.query;
    // draftId가 문자열인지 확인
    if (typeof draftId === "string") {
      try {
        const response = await axios.delete(
          `http://localhost:8080//drafts/${draftId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
              Refresh: refreshToken,
            },
          },
        );

        // 요청이 성공적으로 완료되었음을 알림
        alert("임시저장글이 삭제되었습니다.");
        void router.push("/drafts");
        console.log("임시저장글 삭제 ::::", response);

      } catch (error) {
        console.error("게시글 삭제 중 오류가 발생했습니다.", error);
        alert("게시글 삭제 중 오류가 발생했습니다.");
      }
    } else {
      // draftId가 문자열이 아닌 경우의 처리
      console.error("Invalid draftId:", draftId);
      alert("유효하지 않은 게시글 ID입니다.");
    }
  };

  const onClickMoveWriting = async (draftId: string): Promise<void> => {
    await router.push(`../../../../../../write/TemporaryStorage/TemporaryWriting/${draftId}`);
  };

  const fetchDrafts = async (): Promise<void> => {
    try {
      const response = await axios.get<ApiResponse>(
        "http://localhost:8080/drafts?orderColumn=created_at&orderDirection=desc",
        {
          headers: {
            authorization: "Bearer " + accessToken,
            refresh: refreshToken,
          },
        },
      );
      setDrafts(response.data.result); // 데이터를 상태에 저장
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    void fetchDrafts();
  }, [accessToken, refreshToken]); // 빈 의존성 배열로 마운트 시에만 실행

  const handleNoBtnClick = () => {
    setIsDeleteModalOpen(false);
    setselectedDraftId(null);
  };

  const handleYesBtnClick = async (): Promise<void> => {
    if (!selectedDraftId) return;
    try {
      // 삭제 요청 보내기
      await axios.delete(`http://localhost:8080/drafts/${selectedDraftId}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
          Refresh: refreshToken,
        },
      });
      // 삭제 후 임시저장 게시글 다시 불러오기
      await fetchDrafts();
      setIsDeleteModalOpen(false); // 삭제 모달 닫기
      setselectedDraftId(null); // 선택된 게시글 초기화
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 페이징을 위한 로직
  const totalPageCount = Array.isArray(drafts)
    ? Math.ceil(drafts.length / DRAFTS_PER_PAGE)
    : 0;

  const getCurrentPageDrafts = (): Draft[] => {
    if (!Array.isArray(drafts) || drafts.length === 0) {
      return []; // drafts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    const startIndex = (currentPage - 1) * DRAFTS_PER_PAGE;
    const endIndex = startIndex + DRAFTS_PER_PAGE;
    return drafts.slice(startIndex, endIndex);
  };

  return (
    <TemporaryStorageUI
      drafts={getCurrentPageDrafts()}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      temporaryStorageCount={props.temporaryStorageCount}
      totalPageCount={totalPageCount}
      onClickDelete={onClickDelete}
      onClickMoveWriting={onClickMoveWriting}
      onClickMoveWrite={onClickMoveWrite}
      onClickYesDelete={handleYesBtnClick}
      onClickNoDelete={handleNoBtnClick}
      draftId={props.draftId}
      title={props.title}
    />
  );
}
