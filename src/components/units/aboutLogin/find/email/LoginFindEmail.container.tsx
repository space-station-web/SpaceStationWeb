import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import LoginFindEmailUI from "./LoginFindEmail.presenter";


export default function LoginFindEmail(): JSX.Element {
  const router = useRouter();

  const [_name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [birth, setBirth] = useState("");

  const [errorMessage, setErrorMessage] = useState("ㅤ");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };
  const onChangeBirth = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };
  const handleCheck = async (): Promise<void> => {
    // 비번 확인 해야함 
    try {
      const name = _name;
      const phone = number;
      const b_date = birth;
      
      const response = await axios.post(
        '/email-check',
        {
          name,
          phone,
          b_date
        }
      );
      console.log("res", response);
      // 가입된 계정이면
      await router.push("../../../../../../login/FindEmail/successFind");

      // 가입되지 않은 계정이면 입력값들 초기화 
      setErrorMessage("가입되지 않은 계정입니다.");
      console.log('이메일 찾기 성공');
    } catch (error) {
      console.log('이메일 찾기 실패 실패', error);
    }
    
  };

  return (
    <LoginFindEmailUI
      onChangeName={onChangeName}
      onChangeNumber={onChangeNumber}
      onChangeBirth={onChangeBirth}
      handleCheck={handleCheck}
      onClickMovePrev={onClickMovePrev}
      errorMessage={errorMessage}
    />
  );
}
