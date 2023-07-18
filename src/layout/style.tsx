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
