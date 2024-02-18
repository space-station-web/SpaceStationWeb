import React, { useEffect, useRef, useState } from "react";
import BoardItem from "../../commons/boarditem/BoardItem.container";
import { OptionBox, OptionBtn } from "../../commons/boarditem/BoardItem.styles";
import PaginationComponent from "../../commons/pagination/Pagination";
import * as styled from "./Mypage.styles";
import { MyPageProps } from "./Mypage.types";
import Modal from "./modal/Modal.container";

function MyPageUI({
  tabValue,
  setTabValue,
  tabBarMenu,
  deleteModalOpen,
  handleDeleteModal,
  modalType,
  handleModalType,
  posts,
  storedPosts,
  handleNeighborClick,
  handlePostClick,
  isMine,
  isFollowing,
  handleFollowClick,
  storageName,
  addStorageItem,
  deleteStorageItem,
  handleStorageSelect,
  handleStorageChange,
  handleBackClick,
  questions,
  storages,
}: MyPageProps) {
  const [optionOpen, setOptionOpen] = useState(false);
  const handleOptionClick = () => {
    setOptionOpen(!optionOpen);
  };
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (!optionRef.current?.contains(e.target as Node)) setOptionOpen(false);
    };
    window.addEventListener("click", outsideClick, true);
    return () => {
      window.removeEventListener("click", outsideClick, true);
    };
  });
  return (
    <>
      <Modal isOpen={deleteModalOpen}>
        <styled.ModalBox>
          <img
            src="/common/icon/icon_exit.svg"
            style={{
              alignSelf: "flex-end",
              marginRight: 27,
              cursor: "pointer",
            }}
            onClick={handleDeleteModal}
          />
          <div style={{ marginTop: 24, marginBottom: 30, cursor: "default" }}>
            삭제하시겠습니까?
            <br />
            삭제된 글은 복구되지 않습니다.
          </div>
          <div style={{ display: "flex", gap: 21 }}>
            <styled.MyPageBtn
              style={{ textAlign: "center", backgroundColor: "#b4b4b4" }}
              onClick={() => {
                deleteStorageItem();
                handleDeleteModal();
              }}
            >
              예
            </styled.MyPageBtn>
            <styled.MyPageBtn
              style={{ textAlign: "center", backgroundColor: "#b4b4b4" }}
              onClick={handleDeleteModal}
            >
              아니오
            </styled.MyPageBtn>
          </div>
        </styled.ModalBox>
      </Modal>
      <Modal isOpen={modalType.length !== 0}>
        <styled.ModalBox>
          <img
            src="/common/icon/icon_exit.svg"
            style={{
              alignSelf: "flex-end",
              marginRight: 27,
              cursor: "pointer",
            }}
            onClick={() => {
              handleModalType("");
            }}
          />
          <div>
            {modalType === "edit" ? "보관함 수정하기" : "보관함 추가하기"}
          </div>
          <styled.StorageTitleInput>
            <input
              placeholder="보관함 제목을 입력해주세요"
              style={{
                width: 194,
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: 18,
              }}
              value={storageName}
              onChange={handleStorageChange}
            />
            <img src="/common/icon/icon_unlocked.svg" />
          </styled.StorageTitleInput>
          <styled.MyPageBtn
            style={{ backgroundColor: "#1e1e1e", color: "#dcdcdc" }}
            onClick={() => {
              addStorageItem();
              handleModalType("");
            }}
          >
            완료
          </styled.MyPageBtn>
        </styled.ModalBox>
      </Modal>
      <styled.Wrapper>
        <img
          src="/common/icon/icon_back.svg"
          style={{ alignSelf: "flex-start" }}
          onClick={handleBackClick}
        />
        <styled.Box>
          <styled.ProfileImg />
          <div style={{ display: "flex", alignSelf: "flex-end", gap: 11 }}>
            <img
              src="/common/icon/icon_neighbor.svg"
              onClick={handleNeighborClick}
            />
            {!isMine && (
              <styled.MyPageBtn
                style={
                  isFollowing
                    ? { backgroundColor: "#dcdcdc", color: "#1e1e1e" }
                    : { backgroundColor: "#0a0a0a", color: "#8c8c8c" }
                }
                onClick={handleFollowClick}
              >
                {isFollowing ? "이웃 취소" : "이웃 추가"}
              </styled.MyPageBtn>
            )}
          </div>
          <styled.ProfileName>
            <styled.ProfileNameText>허거덩</styled.ProfileNameText>
            {isMine && <img src="/common/icon/icon_edit_pencil.svg" />}
          </styled.ProfileName>
          <styled.TabBar>
            {tabBarMenu.map((item) => (
              <styled.TabBarItem
                onClick={() => {
                  setTabValue(item);
                }}
                style={{
                  borderColor: tabValue === item ? "#dcdcdc" : "#8c8c8c",
                }}
                key={`mypage-tab-menu-${item}`}
              >
                {item}
              </styled.TabBarItem>
            ))}
          </styled.TabBar>
          <styled.TabBody>
            {tabValue === "보관함" &&
              (storedPosts === undefined ? (
                <div style={{ width: "100%" }}>
                  {isMine && (
                    <styled.StorageItem
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        paddingTop: 35,
                        paddingBottom: 35,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleModalType("add");
                      }}
                    >
                      <img src="/common/icon/icon_plus.svg" />
                      <div style={{ color: "#8C8C8C" }}>추가하기</div>
                    </styled.StorageItem>
                  )}
                  {storages &&
                    storages.map((item) => (
                      <styled.StorageItem
                        key={`storage-item-${item.type}`}
                        onClick={() => {
                          handleStorageSelect(item.storage_type_id, "open");
                        }}
                      >
                        <div style={{ color: "white", lineHeight: "29px" }}>
                          {item.type}
                        </div>
                        {isMine && (
                          <div style={{ display: "flex", gap: 20 }}>
                            <styled.MyPageBtn
                              onClick={(
                                e: React.MouseEvent<HTMLButtonElement>,
                              ) => {
                                e.stopPropagation();
                                handleModalType("edit");
                              }}
                            >
                              수정하기
                            </styled.MyPageBtn>
                            <styled.MyPageBtn
                              onClick={(
                                e: React.MouseEvent<HTMLButtonElement>,
                              ) => {
                                e.stopPropagation();
                                handleDeleteModal();
                                handleStorageSelect(
                                  item.storage_type_id,
                                  "delete",
                                );
                              }}
                            >
                              삭제하기
                            </styled.MyPageBtn>
                          </div>
                        )}
                      </styled.StorageItem>
                    ))}
                </div>
              ) : (
                <>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 30,
                    }}
                    onClick={() => {
                      handleStorageSelect(-1, "open");
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        position: "relative",
                      }}
                    >
                      <div style={{ color: "#dcdcdc", fontSize: 30 }}>
                        {storedPosts.name}
                      </div>
                      <div style={{ color: "#b4b4b4", fontSize: 20 }}>
                        글 {storedPosts.list.length}개
                      </div>
                    </div>
                    <img
                      src="/common/icon/more.svg"
                      onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                        e.stopPropagation();
                        handleOptionClick();
                      }}
                    />
                    {optionOpen && (
                      <OptionBox ref={optionRef} style={{ left: 1107 }}>
                        <OptionBtn
                          style={{
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          }}
                        >
                          수정하기
                        </OptionBtn>
                        <OptionBtn
                          style={{
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                          }}
                          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.stopPropagation();
                            handleDeleteModal();
                            handleStorageSelect(storedPosts.id, "delete");
                          }}
                        >
                          삭제하기
                        </OptionBtn>
                      </OptionBox>
                    )}
                  </div>
                  <styled.List>
                    {storedPosts.list.map((item) => (
                      <BoardItem
                        type="writting"
                        writtingItem={item}
                        key={`mypage-board-item-${item.post_id}-${item.user_id}`}
                        onClick={() => {
                          handlePostClick(item.post_id);
                        }}
                      />
                    ))}
                  </styled.List>
                </>
              ))}
            <styled.List>
              {tabValue === "내 글"
                ? posts &&
                  posts.map((item) => (
                    <BoardItem
                      type="writting"
                      writtingItem={item}
                      key={`mypage-board-item-${item.post_id}-${item.user_id}`}
                      onClick={() => {
                        handlePostClick(item.post_id);
                      }}
                    />
                  ))
                : tabValue === "질문집"
                  ? questions &&
                    questions.map((item) => (
                      <BoardItem type="question" questionItem={item} />
                    ))
                  : null}
            </styled.List>
            <PaginationComponent
              currentPage={1}
              setCurrentPage={() => {}}
              totalPageCount={3}
            />
          </styled.TabBody>
        </styled.Box>
      </styled.Wrapper>
    </>
  );
}

export default MyPageUI;
