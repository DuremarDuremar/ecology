import styled from "styled-components";

export const Content = styled.div`
  overflow: auto;
  margin: 0 3px;

  div {
    height: 40px;
    background: #e1e2db;
    position: fixed;
    width: 102%;

    h2 {
      font-family: "Bad Script";
      font-size: 27px;
      line-height: 130%;
      padding-left: 10px;
    }
  }

  ul {
    margin-top: 40px;
    background: #e9e6db;
    border: 3px solid #7490c7;
    border-radius: 10px;
    padding: 10px 10px 10px 25px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    font-weight: 400;

    li {
      list-style-type: circle;
      border-bottom: 1px solid #7490c7;
    }
  }
`;
export const Dot = styled.button<{
  active?: boolean;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #2b3244;
  background: ${(props) => (props.active ? "#7490c7" : "#e9e6db")};
`;
