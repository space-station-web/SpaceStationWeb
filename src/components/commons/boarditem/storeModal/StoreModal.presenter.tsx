import * as styled from "./StoreModal.styles";
import { StoreModalUIProps } from "./StoreModal.types";
function StoreModalUI({
  storages,
  selectedStorage,
  setSelectedStorage,
  setModalClose,
  handleStore,
  deletePost,
}: StoreModalUIProps) {
  return (
    <styled.Background>
      <styled.Wrapper>
        <img
          src="/common/icon/icon_exit.svg"
          style={{ alignSelf: "flex-end", marginTop: 24, marginRight: 24 }}
          onClick={setModalClose}
        />
        <div>보관하실 보관함을 선택해주세요.</div>
        <styled.StorageList>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 17,
              marginBottom: 30,
            }}
          >
            {storages &&
              storages.map((item) => {
                return (
                  <styled.StorageItem
                    key={`store-modal-storage-item-${item.storage_type_id}`}
                  >
                    <styled.RadioBtn
                      onClick={() => {
                        if (selectedStorage.includes(item.storage_type_id)) {
                          setSelectedStorage(
                            selectedStorage.filter(
                              (selectedItem) =>
                                item.storage_type_id !== selectedItem,
                            ),
                          );
                          deletePost(item.storage_type_id);
                        } else
                          setSelectedStorage([
                            ...selectedStorage,
                            item.storage_type_id,
                          ]);
                      }}
                    >
                      {selectedStorage.includes(item.storage_type_id) && (
                        <styled.RadioBtnSelected />
                      )}
                    </styled.RadioBtn>
                    <div>{item.type}</div>
                  </styled.StorageItem>
                );
              })}
          </div>
          <img src="/common/icon/icon_plus.svg" />
        </styled.StorageList>
        <styled.StoreBtn
          onClick={() => {
            handleStore();
            setModalClose();
          }}
        >
          담기
        </styled.StoreBtn>
      </styled.Wrapper>
    </styled.Background>
  );
}

export default StoreModalUI;
