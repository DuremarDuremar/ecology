import styled from "styled-components";

export const Content = styled.header<{
  res900: boolean;
}>`
  grid-area: h;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5vw 1.1vw 1.1vw;
  align-items: ${(props) => (props.res900 ? "space-between" : "start")};
  @media (max-width: 900px) {
    padding-top: 30px;
  }
  div {
    display: flex;
    justify-content: space-around;
    flex-direction: ${(props) => (props.res900 ? "row" : "column-reverse")};
  }
  h1,
  h3 {
    font-family: "Bad Script";
    font-size: ${(props) => (props.res900 ? "30px" : "20px")};
    line-height: 110%;
  }
  h3 {
    @media (max-width: 900px) {
      margin-top: 20px;
    }
  }
  strong {
    font-size: 30px;
    line-height: 110%;
    /* font-style: italic; */
  }

  h1 {
    position: relative;
    :after {
      content: "";
      display: block;
      position: absolute;
      background: #7490c7;
      max-width: 300px;
      height: 2px;
      width: 100%;
      left: 10%;
      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  a {
    padding: 10px 15px;

    border-radius: 5px;
    background: rgb(100, 100, 100)
      radial-gradient(
        circle at 0 0,
        rgba(255, 255, 255, 0.65),
        rgba(255, 255, 255, 0.35)
      );
    box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,
      inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
      rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
    z-index: 1;
  }
  svg {
    color: black;
    width: 20px;
    height: 20px;
    position: relative;
    top: 10px;
  }
`;

export const Fon = styled.div`
  position: absolute;
  inset: 0;
  img {
    opacity: 0.2;
    max-width: 900px;
    width: 100%;
    margin-top: 45%;
    margin-left: 20%;
  }
`;
