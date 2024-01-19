import type { Dispatch, SetStateAction } from "react";

export interface MessageProps {
  text: string;
  link: string;
  time: number;
  isRead: boolean;
}
export interface NotificationProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  notifications: MessageProps[];
  setNotifications: Dispatch<SetStateAction<MessageProps[]>>;
}
