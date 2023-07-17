import styled from "styled-components";
export const Content = styled.main`
  display: grid;
  grid-template-areas:
    "h h h h l"
    "m m m m l"
    "m m m m l"
    "m m m m n"
    "m m m m n";
  min-height: 100vh;
  overflow: hidden;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  position: relative;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Footer = styled.footer`
  font-size: 14px;
  position: absolute;
  right: 5px;
  bottom: 7px;
  display: flex;
  column-gap: 20px;
  @media (max-width: 900px) {
    position: static;
    height: 30px;
    line-height: 300%;
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    background: #7490c7;
    max-width: 900px;
    height: 3px;
    width: 100%;
    bottom: -15%;
    left: 0;
  }
`;
