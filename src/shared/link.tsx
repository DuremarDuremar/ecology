import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 80px;
    height: 80px;
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
    width: 60px;
    height: 60px;
  }
  p {
    text-align: center;
    padding-top: 4px;
    font-weight: 600;
  }
`;

interface IProps {
  link: string;
  Icon: string;
}

const Link: FC<IProps> = ({ link, Icon }) => {
  return (
    <NLink to={link}>
      <div>
        <Icon />
      </div>
      <p>
        {link === "/price" ? (
          <span>прайс</span>
        ) : link === "/about" ? (
          <span>
            контакты
            <br />
            обратная связь
          </span>
        ) : (
          <span>услуги</span>
        )}
      </p>
    </NLink>
  );
};

export default Link;
