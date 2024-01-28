import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import LoginFindPasswordUI from "./LoginFindPassword.presenter";

export default function LoginFindPassword(): JSX.Element {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };

  return <LoginFindPasswordUI
  onChangeName={onChangeName}
  onChangePassword={onChangePassword}
  onClickMovePrev={onClickMovePrev}
  />;
}
