import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import ChangePasswordUI from "./ChangePassword.presenter";

export default function ChangePassword(): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("ㅤ");
  const [isEdit, setIsEdit] = useState(false);

  // 비밀번호 정규식
  const [errorMessagePW, setErrorMessagePW] = useState("ㅤ");
  const [isError2, setIsError2] = useState(false); 

  // 비밀번호 placeholder
  const [phPassword, setPhPassword] = useState("비밀번호");

  // 모든 입력값 이상 여부
  const [isRight, setIsRight] = useState(false);

  useEffect(() => { // 완료 버튼 활성화 여부 (조건 모두 만족시 활성화)
    if (!isEdit && !isError2) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
    console.log("isRight", isRight);
  }, [isEdit, isError2]);

  const onClickMoveSuccess = async (): Promise<void> => {
    try {
      const pw = newPassword;
      const pwcheck = confirmPassword;
      console.log("id",userId);
      const response = await axios.post(
        `http://localhost:8080/changepw/${userId}`,
        {
          pw,
          pwcheck
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) {
        await router.push('../../../../../../login/FindPassword/changePassword/successFind');
        console.log('비밀번호 변경 성공');
      } else {
        console.log('비밀번호 변경 false');
      }
      
      
    } catch (error) {
      console.log('비밀번호 변경 실패', error);
      
    }

  };

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputPassword = event.currentTarget.value;
  
    // 정규표현식을 사용해서 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(inputPassword);
  
    if (isValidPassword) {
      setNewPassword(inputPassword);
      setIsError2(false);
      setErrorMessagePW("ㅤ"); // 유효한 경우 에러 메시지를 비워줘
    } else {
      setIsError2(true); 
      setErrorMessagePW("대소문자, 숫자, 특수문자를 포함한 최소 8자여야 합니다.");
    }
  };

  const onChangeConfirmPassword = ( // 새 비밀번호 확인 (새 비밀번호와 일치할 때까지 '불일치'텍스트 나오도록)
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(event.currentTarget.value);

    if (newPassword !== event.currentTarget.value) {
      setIsEdit(true);
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsEdit(false);
      setErrorMessage("ㅤ");
    }
  };

  // placeholder 변경
  const onFocusPassword = async (): Promise<void> => {
    setPhPassword("최소 8자리, 대 소문자,숫자,특수문자 포함");
  };
  const onBlurPassword = async (): Promise<void> => {
    setPhPassword("비밀번호");
  };


  return (
    <ChangePasswordUI
      onClickMoveSuccess={onClickMoveSuccess}
      onChangeNewPassword={onChangeNewPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      isEdit={isEdit}
      errorMessage={errorMessage}

      isError2={isError2}
      errorMessagePw={errorMessagePW}

      isRight={isRight}

      onFocusPassword={onFocusPassword}
      onBlurPassword={onBlurPassword}
      phPassword={phPassword}
    />
  );
}
