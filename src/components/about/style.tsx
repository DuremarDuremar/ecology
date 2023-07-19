import styled from "styled-components";
export const Content = styled.div`
  overflow: auto;
  z-index: 1;
  position: relative;
  max-height: 55vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  @media (max-width: 900px) {
    max-height: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Person = styled.div`
  display: flex;
`;
export const Foto = styled.div`
  img {
    max-width: 150px;
    width: 100%;
    border-radius: 5px;
  }
`;
export const Info = styled.div`
  background: #e9e6db;
  max-width: 300px;
  width: 100%;
  padding-left: 10px;
  padding-right: 5px;
  height: 280px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  h3 {
    font-size: 20px;
    font-weight: 400;
  }
  h4 {
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 130%;
    /* font-style: italic; */
  }
  @media (max-width: 900px) {
    max-width: 100%;
    height: 100%;
  }
`;
