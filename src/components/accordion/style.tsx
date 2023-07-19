import styled from "styled-components";
export const Content = styled.div``;
export const Title = styled.div<{
  show: boolean;
}>`
  display: flex;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  background: ${(props) => (props.show ? "#7490c7" : "#e9e6db")};
  position: relative;
  z-index: 1;
  cursor: pointer;
  div {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 50%;
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
    &:hover {
      transform: skewX(4deg);
      border: 3px solid black;
    }
  }
  svg {
    color: black;
    width: 40px;
    height: 40px;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    color: black;
  }
`;
export const Body = styled.div``;
