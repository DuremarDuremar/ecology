import styled from "styled-components";

export const Content = styled.section`
  grid-area: n;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 30px;
  }
`;
