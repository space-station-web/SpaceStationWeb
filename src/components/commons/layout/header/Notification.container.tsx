import { useState } from "react";
import NotificationUI from "./Notification.presenter";
import type { MessageProps } from "./Notification.types";

const mockNoti = [
  { text: "베리님이 댓글을 달았네요.", link: "", time: 100, isRead: true },
  { text: "딸기님이 공감을 눌렀어요.", link: "", time: 100, isRead: false },
  { text: "오늘의 질문이 공개되었어요.", link: "", time: 100, isRead: true },
  { text: "오늘의 질문이 공개되었어요.", link: "", time: 100, isRead: true },
  { text: "오늘의 질문이 공개되었어요.", link: "", time: 100, isRead: true },
  { text: "오늘의 질문이 공개되었어요.", link: "", time: 100, isRead: true },
];
function Notification(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const [notifications, setNotifications] = useState<MessageProps[]>(mockNoti);
  return (
    <NotificationUI
      isOpened={isOpened}
      setIsOpened={setIsOpened}
      notifications={notifications}
      setNotifications={setNotifications}
    />
  );
}

export default Notification;
