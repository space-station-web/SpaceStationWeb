import { useEffect, useRef, useState } from "react";
import * as styled from "./BoardItem.styles";
import { BoardItemUIProps } from "./BoardItem.types";
function BoardItemUI({
  type,
  writtingItem,
  questionItem,
  save,
  handleSaveClick,
}: BoardItemUIProps) {
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
  switch (type) {
    default:
      return writtingItem ? (
        <styled.MyWritting
          $imgUrl={writtingItem.img}
          key={`${writtingItem.author}-${writtingItem.title}`}
        >
          <styled.SaveBtn onClick={handleSaveClick}>
            <styled.IconSave $issave={save} />
          </styled.SaveBtn>
          <styled.MyWrittingInfoField>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <styled.MyWrittingAuthor>
                {writtingItem.author}
              </styled.MyWrittingAuthor>
              <styled.MyWrittingTitle>
                {writtingItem.title}
              </styled.MyWrittingTitle>
            </div>
            <img
              src="/common/icon/more.svg"
              style={{ height: 25, marginTop: 2 }}
              onClick={handleOptionClick}
            />
          </styled.MyWrittingInfoField>
          {optionOpen && (
            <styled.OptionBox ref={optionRef}>
              <styled.OptionBtn
                style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              >
                수정하기
              </styled.OptionBtn>
              <styled.OptionBtn
                style={{
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                공유하기
              </styled.OptionBtn>
            </styled.OptionBox>
          )}
        </styled.MyWritting>
      ) : null;

    case "question":
      return questionItem ? (
        <styled.Question>
          <div>
            {questionItem.number < 10
              ? "0" + questionItem.number
              : questionItem.number}
          </div>
          <div style={{ marginTop: 10, marginBottom: 32 }}>
            {questionItem.question}
          </div>
          <div style={{ color: "#b4b4b4" }}>{questionItem.answer}</div>
          <img
            src="/common/icon/more.svg"
            style={{
              width: 25,
              height: 25,
              marginTop: "auto",
              alignSelf: "flex-end",
              position: "relative",
              right: -29,
            }}
            onClick={handleOptionClick}
          />
          {optionOpen && (
            <styled.OptionBox ref={optionRef}>
              <styled.OptionBtn
                style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              >
                수정하기
              </styled.OptionBtn>
              <styled.OptionBtn
                style={{
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                공유하기
              </styled.OptionBtn>
            </styled.OptionBox>
          )}
        </styled.Question>
      ) : null;
  }
}

export default BoardItemUI;
