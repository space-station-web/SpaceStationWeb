import { useState, type ChangeEvent, useEffect } from "react";
import LoginFindEmailUI from "./LoginFindEmail.presenter";

export default function LoginFindEmail(): JSX.Element {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [startTimer, setStartTimer] = useState(false); // 타이머 시작 상태를 추적하는 변수
  const [isActive, setIsActive] = useState(false);

  // Timer
  const minuteInMs = 2 * 60 * 1000;
  const interval = 1000;
  const [timeLeft, setTimeLeft] = useState(minuteInMs);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    "0",
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
  useEffect(() => {
    let timer: number | undefined;
    if (startTimer) {
      // 타이머 시작 상태가 true일 때만 타이머를 시작합니다.
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - interval);
      }, interval);

      if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("타이머가 종료되었습니다.");
        setStartTimer(false); // 타이머가 종료되면 시작 상태를 false로 설정합니다.
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, startTimer]); // startTimer를 의존성 배열에 추가합니다.
  // Timer End

  const onClickVert = (): void => {
    if (number === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (isActive) {
      setTimeLeft(minuteInMs);
    }
    setStartTimer(true); // 버튼 클릭 시 타이머 시작 상태를 true로 설정합니다.
    alert("인증번호가 전송되었습니다.");

    setIsActive(true);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.currentTarget.value);
  };

  return (
    <LoginFindEmailUI
      onClickVert={onClickVert}
      onChangeName={onChangeName}
      onChangePhone={onChangePhone}
      minutes={minutes}
      second={second}
      isActive={isActive}
    />
  );
}
