import styled from "styled-components";

export const Content = styled.div``;

export const List = styled.ul`
  background: #e9e6db;
  font-weight: 400;
  /* max-height: 360px; */
  max-height: 55vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 4px;
  @media (max-width: 900px) {
    max-height: 100%;
  }
  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    font-size: 17px;
    font-style: italic;
    @media (max-width: 630px) {
      font-size: 14px;
    }
  }
  li:first-child {
    padding-top: 3px;
    border-top: 1px solid black;
  }
  h5 {
    width: 85%;
    @media (max-width: 900px) {
      width: 70%;
    }
  }
  h6 {
    padding: 5px;
    text-align: center;
    width: 15%;
    @media (max-width: 900px) {
      width: 30%;
    }
  }
`;

export const Sort = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    height: 30px;
    font-family: "Bad Script";
    font-size: 25px;
    line-height: 110%;
    border-radius: 10px;
    background: rgb(100, 100, 100)
      radial-gradient(
        circle at 0 0,
        rgba(255, 255, 255, 0.65),
        rgba(255, 255, 255, 0.35)
      );
    box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,
      inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
      rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 630px) {
      font-size: 20px;
    }
  }
  button:first-child {
    width: 80%;
    text-align: left;
    padding-left: 4px;
  }
  button:last-child {
    width: 15%;
  }
  button:hover {
    transform: skewX(10deg);
  }
`;
