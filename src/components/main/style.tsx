import styled from "styled-components";

export const Content = styled.section`
  grid-area: m;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    margin: 10px 5px;
  }
  .alice-carousel__dots {
    display: flex;
    justify-content: center;
    column-gap: 12px;
    margin: 20px 3px 5px;
  }
  /* @media (max-width: 900px) {
    .alice-carousel__wrapper {
     
    }
  } */
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;
