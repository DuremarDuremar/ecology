import styled from "styled-components";
export const Content = styled.ul`
  background: #e9e6db;
  font-weight: 400;
  max-height: 400px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  /* li:first-child {
    padding-top: 3px;
    border-top: 1px solid black;
  } */
  h5 {
    width: 85%;
  }
  h6 {
    text-align: center;
    width: 15%;
  }
`;
