// import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
// import TemporaryStorageUI from "./TemporaryStorage.presenter";
// import type { ITemporaryStorage } from "./TemporaryStorage.types";

// const router = useRouter();
//   const [accessToken, setAccessToken] = useState<string | null>(null);
//   const [refreshToken, setRefreshToken] = useState<string | null>(null);

// // 삭제 로직 수행하는 함수
// const onClickDelete = async (): Promise<void> => {
//     const router = useRouter();
//     const { draft_id: draftId } = router.query;
//     // postId가 문자열인지 확인
//     if (typeof draftId === "string") {
//       try {
//         const response = await axios.delete(
//           `http://localhost:8080//drafts/{draftId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: accessToken,
//               Refresh: refreshToken,
//             },
//           },
//         );

//         // 요청이 성공적으로 완료되었음을 알림
//         alert("게시글이 삭제되었습니다.");
//         onclose(); // 게시글 삭제 후 모달 닫기
//         void router.push("/boards");
//         console.log(response);

//         // void router.push("/boards");
//       } catch (error) {
//         console.error("게시글 삭제 중 오류가 발생했습니다.", error);
//         alert("게시글 삭제 중 오류가 발생했습니다.");
//       }
//     } else {
//       // postId가 문자열이 아닌 경우의 처리
//       console.error("Invalid postId:", draftId);
//       alert("유효하지 않은 게시글 ID입니다.");
//     }
//   };