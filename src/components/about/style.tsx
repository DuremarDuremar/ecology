import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background: #e9e6db;
  padding: 5px;
  border-radius: 5px;
  @media (max-width: 700px) {
    display: block;
  }
`;
export const Persons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 24px;
  font-weight: 400;
  flex: 50%;
`;
export const Send = styled.div`
  flex: 50%;
  @media (max-width: 700px) {
    padding-top: 30px;
  }
`;
export const Form = styled.div`
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 118%;
    font-family: "Bad Script";
  }
  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    padding: 4px 3px;
    max-width: 258px;
    width: 100%;
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 100;
    line-height: 118%;
    border-bottom: 1px solid #7490c7;
    border-left: 1px solid #7490c7;
    border-radius: 3px;
  }
  input[type="tel"],
  input[type="email"] {
    margin-top: 24px;
  }
  input[type="text"] {
    margin-top: 24px;
  }
  input[type="checkbox"] {
    width: 9px;
    height: 9px;
  }
  div {
    margin-top: 6px;
  }
  span {
    color: #7d7d7d;
    font-size: 10px;
    font-weight: 300;
    line-height: 118%;
    padding-left: 4px;
  }
  button {
    background: rgb(100, 100, 100)
      radial-gradient(
        circle at 0 0,
        rgba(255, 255, 255, 0.65),
        rgba(255, 255, 255, 0.35)
      );
    border-radius: 3px;
    color: #fffdf5;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 120px;
    width: 100%;
    padding: 10px 0;
    font-size: 12px;
    border: 0.5px solid white;
    transition: all 0.7s ease-in-out;
    svg {
      width: 26px;
      height: 4px;
      fill: #fffdf5;
      transition: all 0.7s ease-in-out;
    }
    &:hover {
      background: #fffdf5;
      color: #7490c7;

      svg {
        fill: #7490c7;
      }
    }
  }
  label {
    padding: 10px 0;
    font-style: 15px;
    font-family: "Bad Script";
  }
  textarea {
    border: 1px solid #7490c7;
    border-radius: 3px;
    padding: 3px 6px;
    resize: none;
  }
`;
