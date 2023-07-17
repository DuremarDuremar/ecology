import styled from "styled-components";

export const Content = styled.section`
  grid-area: m;
  margin: 10px;
  @media (max-width: 900px) {
    margin: 10px 5px;
  }
  .alice-carousel__dots {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    margin: 20px 3px 5px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;
