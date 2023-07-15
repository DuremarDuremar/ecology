import styled from "styled-components";

export const Content = styled.div`
  overflow: auto;
  div {
    height: 40px;
    background: #e1e2db;
    h2 {
      font-family: "Bad Script";
      font-size: 27px;
      line-height: 110%;
    }
  }

  ul {
    background: #e9e6db;
    border: 3px solid #7490c7;
    border-radius: 20px;
    padding: 10px 10px 10px 25px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    li {
      list-style-type: circle;
      border-bottom: 1px solid #7490c7;
    }
  }
`;
