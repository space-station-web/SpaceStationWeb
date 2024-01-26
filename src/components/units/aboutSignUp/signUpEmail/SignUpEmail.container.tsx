import { useRouter } from "next/router";
import { useState, type ChangeEvent, useEffect } from "react";
import axios from 'axios';
import SignUpEmailUI from "./SignUpEmail.presenter";

export default function SignUpEmail(): JSX.Element {
  const router = useRouter();

  const [_email, setEmail] = useState("");
  const [_name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [_number, setNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [errorMessage, setErrorMessage] = useState("ㅤ");
  const [isEdit, setIsEdit] = useState(false);

  const handleSignUp = async (): Promise<void> => {
    // 비번 확인 해야함 
    try {
      const name = _name;
      const email = _email;
      const pw = password;
      const pwcheck = confirmPassword;
      const number = _number;
      const b_date = birth;
      
      const response = await axios.post(
        '/signup',
        {
          name,
          email,
          pw,
          pwcheck,
          number,
          b_date
        }
      );
      console.log("res", response);
      await router.push("../../../../../../signUp/signUpSuccess");
      console.log('회원가입 성공');
    } catch (error) {
      console.log('회원가입 실패', error);
    }
    
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };
  const onChangeNumber = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };
  const onChangeBirth = (event: ChangeEvent<HTMLInputElement>): void => {
    setBirth(event.currentTarget.value);
  };

  const onChangeConfirmPassword = ( // 비밀번호 확인 (비밀번호와 일치할 때까지 '불일치'텍스트 나오도록)
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(event.currentTarget.value);

    if (password !== event.currentTarget.value) {
      setIsEdit(true);
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsEdit(false);
      setErrorMessage("ㅤ");
    }
  };
  
  return <SignUpEmailUI 
    onChangeEmail={onChangeEmail}
    onChangeName={onChangeName}
    onChangePassword={onChangePassword}
    onChangeConfirmPassword={onChangeConfirmPassword}
    onChangeNumber={onChangeNumber}
    onChangeBirth={onChangeBirth}
    handleSignUp={handleSignUp}
    isEdit={isEdit}
    errorMessage={errorMessage} />;
}
