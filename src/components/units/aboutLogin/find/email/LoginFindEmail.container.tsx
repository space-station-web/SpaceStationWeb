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
    setBirth(event.currentTarget.value);
  };
  const onClickMovePrev = async (): Promise<void> => {
    history.back();
  };
  const handleFind = async (): Promise<void> => {
    // await router.push("../../../../../../login/FindEmail/successFind");
    // 비번 확인 해야함 
    try {
      const name = _name;
      const phone = number;
      const b_date = birth;
      
      const response = await axios.post(
        'http://localhost:8080/email-check',
        {
          name,
          phone,
          b_date
        }
      );
      console.log("res", response);
      const isSuccess = response.data.result.isSuccess === true;
      if (isSuccess) { // 가입된 계정이면
        const nickname = response.data.result.result.userNickname;
        const email = response.data.result.result.userEmail;
        await router.push({
          pathname: "../../../../../../login/FindEmail/successFind",
          query: { nickname, email },
        });
        
      } else { // 가입되지 않은 계정이면 입력값들 초기화 
        setErrorMessage("가입되지 않은 계정입니다.");
      }
    } catch (error) {
      console.log('이메일 찾기 실패 실패', error);
    }
    
  };

  return (
    <LoginFindEmailUI
      onChangeName={onChangeName}
      onChangeNumber={onChangeNumber}
      onChangeBirth={onChangeBirth}
      handleFind={handleFind}
      onClickMovePrev={onClickMovePrev}
      errorMessage={errorMessage}
    />
  );
}
