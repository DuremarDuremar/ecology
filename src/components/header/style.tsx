import styled from "styled-components";

export const Content = styled.header`
  grid-area: h;
  /* background-color: #90a5ce; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px;

  div {
    display: flex;
    justify-content: space-between;
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
  }
  a {
    padding-top: 15px;
  }
`;
