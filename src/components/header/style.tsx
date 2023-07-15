import styled from "styled-components";

export const Content = styled.header`
  grid-area: h;
  /* background-color: #90a5ce; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.1vw;

  div {
    display: flex;
    justify-content: space-around;
  }
  h1,
  h3 {
    font-family: "Bad Script";
    font-size: 35px;
    line-height: 110%;
  }
  strong {
    font-size: 60px;
    line-height: 110%;
    font-style: italic;
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
    }
  }

  a {
    padding-top: 15px;
  }
`;
