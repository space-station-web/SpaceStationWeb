import * as styled from "./Notification.styles";
import type { NotificationProps } from "./Notification.types";

function NotificationUI({
  isOpened,
  setIsOpened,
  notifications,
  setNotifications,
}: NotificationProps): JSX.Element {
  return (
    <>
      <img
        src={
          notifications.filter((item) => !item.isRead && item).length !== 0
            ? "/common/icon/icon_alert.svg"
            : "/common/icon/icon_alert_disable.svg"
        }
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
            <div
              style={{ marginRight: 20, fontSize: 15, cursor: "pointer" }}
              onClick={() => {
                setNotifications([]);
              }}
            >
              전체 삭제
            </div>
            <img
              src="/common/icon/icon_exit.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsOpened(false);
              }}
            />
          </div>
          <styled.MessageWrapper>
            {notifications.map((item, idx) => {
              return (
                <styled.MessageBox key={`Noti-${item.text}-${idx}`}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      cursor: "pointer",
                      
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <styled.CheckRead $isRead={item.isRead} />
                      <div style={{ fontSize: 18 }}>{item.text}</div>
                    </div>
                    <div style={{ alignSelf: "flex-end", fontSize: 15 }}>
                      방금 전
                    </div>
                  </div>
                  <img
                    src="/common/icon/icon_exit.svg"
                    style={{
                      width: 12,
                      height: 12,
                      fill: "#8c8c8c",
                      position: "absolute",
                      right: 14,
                      top: 15.5,
                    }}
                    onClick={() => {
                      setNotifications(
                        notifications.filter((fItem) => fItem !== item),
                      );
                    }}
                  />
                </styled.MessageBox>
              );
            })}
          </styled.MessageWrapper>
        </styled.Wrapper>
      )}
    </>
  );
}

export default NotificationUI;
