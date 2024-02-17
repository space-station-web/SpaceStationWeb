import * as F from "./Footer.styled";

export default function Footer(): JSX.Element {
  return (
    <>
      <F.Wrapper>
        <F.DividedLine></F.DividedLine>

        <F.Footer>
          <F.FooterContainer>
            <F.TextContainer>
              <img
                src="/logo.svg"
                style={{
                  width: "0.96rem",
                  height: "0.96rem",
                  marginRight: "18px",
                }}
              />
              <F.Text>우주 정거장</F.Text>
            </F.TextContainer>

            <F.TextContainer style={{ marginTop: "20px" }}>
              <F.Text style={{ marginRight: "50px" }}>
                spacestation275@gmail.com
              </F.Text>
              <F.Text>T. 000-0000</F.Text>
            </F.TextContainer>

            <F.TextContainer>
              <F.Text style={{ marginRight: "115px" }}>
                개인정보 처리방침
              </F.Text>
              <F.Text>이용약관</F.Text>
            </F.TextContainer>
          </F.FooterContainer>
        </F.Footer>
      </F.Wrapper>
    </>
  );
}
