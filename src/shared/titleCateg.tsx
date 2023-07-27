import styled from "styled-components";

const TitleCateg = styled.h1`
  padding-top: 15px;
  font-family: "Bad Script";
  font-size: 35px;
  line-height: 110%;
  span {
    font-size: 28px;
    @media (max-width: 480px) {
      display: block;
    }
  }
`;

export default TitleCateg;
