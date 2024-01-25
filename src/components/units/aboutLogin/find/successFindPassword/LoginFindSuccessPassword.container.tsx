import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import LoginFindSuccessPasswordUI from "./LoginFindSuccessPassword.presenter";

export default function LoginFindSuccessPassword(): JSX.Element {
  const router = useRouter();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("ㅤ");
  const [isEdit, setIsEdit] = useState(false);

  const onClickMoveLogin = async (): Promise<void> => {
    // 비번 확인 해야함 
    try {
      console.log("newPassword :",newPassword);
      console.log("confirmPassword :",confirmPassword);
      const pw = newPassword;
      const pwcheck = confirmPassword;

      const response = await axios.post(
        '/changepw',
        {
          pw,
          pwcheck
        }
      );
      console.log("res", response);

      // 비번 확인 이상 없으면 로그인 화면으로 이동
      await router.push('../../../../../../login');
      
      console.log('비밀번호 변경 성공');
    } catch (error) {
      console.log('비밀번호 변경 실패', error);
      
    }

    

  };

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.currentTarget.value);
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


  return (
    <LoginFindSuccessPasswordUI
      onClickMoveLogin={onClickMoveLogin}
      onChangeNewPassword={onChangeNewPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      isEdit={isEdit}
      errorMessage={errorMessage}
    />
  );
}
