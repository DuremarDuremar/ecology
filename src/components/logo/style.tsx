import styled from "styled-components";

export const Content = styled.section`
  grid-area: l;
  background-color: #e1e2db;
  @media (max-width: 900px) {
    display: none;
  }

  div {
    max-width: 500px;
    margin-left: auto;
    margin-right: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;
