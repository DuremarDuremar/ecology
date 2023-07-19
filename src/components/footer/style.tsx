import styled from "styled-components";
export const Content = styled.footer`
  font-size: 12px;
  position: absolute;
  right: 5px;
  bottom: 7px;
  display: flex;
  column-gap: 20px;
  span:last-child {
    padding-left: 10px;
  }
  @media (max-width: 900px) {
    position: static;
    height: 40px;
    justify-content: center;
    margin-top: 25px;
    span {
      display: block;
      line-height: 100%;
    }
    span:last-child {
      padding-left: 0;
    }
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    background: #7490c7;
    max-width: 900px;
    height: 3px;
    width: 100%;
    bottom: -15%;
    left: 0;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
