import type { Dispatch, SetStateAction } from "react";
import { type MessageProps } from "./Notification.container";
import * as styled from "./Notification.styles";

interface NotificationProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  notifications: MessageProps[];
}
function NotificationUI({
  isOpened,
  setIsOpened,
  notifications,
}: NotificationProps): JSX.Element {
  return (
    <>
      <img
        src="/common/icon/icon_alert_disable.svg"
        style={{ marginRight: 60 }}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      />
      {isOpened && (
        <styled.Wrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 22.5,
            }}
          >
            <div style={{ marginLeft: 15, marginRight: 114 }}>나의 우주선</div>
            <div style={{ marginRight: 20, fontSize: 15 }}>전체 삭제</div>
            <img
              src="/common/icon/icon_exit.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsOpened(false);
              }}
            />
          </div>
          <div style={{ borderTop: "1.5px solid #b4b4b4" }}>
            {notifications.map((item, idx) => {
              return (
                <styled.MessageWrapper key={`Noti-${item.text}-${idx}`}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <styled.CheckRead $isRead={item.isRead} />
                      <div style={{ fontSize: 18 }}>{item.text}</div>
                    </div>
                    <div style={{ alignSelf: "flex-end", fontSize: 15 }}>
                      방금 전
                    </div>
                  </div>
                </styled.MessageWrapper>
              );
            })}
          </div>
        </styled.Wrapper>
      )}
    </>
  );
}

export default NotificationUI;
