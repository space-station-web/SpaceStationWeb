import { useState } from "react";
import type { ChangeEvent } from "react";
import LoginFindSuccessPasswordUI from "./LoginFindSuccessPassword.presenter";

export default function LoginFindSuccessPassword(): JSX.Element {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("ㅤ");
  const [isEdit, setIsEdit] = useState(false);

  const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.currentTarget.value);

    if (event.currentTarget.value !== confirmPassword) {
      setIsEdit(true);
      setErrorMessage("비밀번호가 일치하지 않아요.");
    } else {
      setErrorMessage("ㅤ");
    }
  };
  const onChangeConfirmPassword = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(event.currentTarget.value);

    if (newPassword !== event.currentTarget.value) {
      setIsEdit(true);
      setErrorMessage("비밀번호가 일치하지 않아요.");
    } else {
      setErrorMessage("ㅤ");
    }
  };

  return (
    <LoginFindSuccessPasswordUI
      onChangeNewPassword={onChangeNewPassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      isEdit={isEdit}
      errorMessage={errorMessage}
    />
  );
}
