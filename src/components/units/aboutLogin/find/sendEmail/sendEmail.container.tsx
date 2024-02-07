import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import SendEmailUI from "./sendEmail.presenter";

export default function SendEmail(): JSX.Element {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };
  const onClickMoveFindPw = async (): Promise<void> => {
    await router.push("../../../../../../login/FindPassword");
  };

  return <SendEmailUI
  onChangeName={onChangeName}
  onChangeEmail={onChangeEmail}
  onClickMovePrev={onClickMovePrev}
  onClickMoveFindPw={onClickMoveFindPw}
  />
}
