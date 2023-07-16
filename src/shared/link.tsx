import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as SvgPrice } from "../assets/price-icon.svg";
import { ReactComponent as SvgPerson } from "../assets/user-icon.svg";
import { ReactComponent as SvgCatalog } from "../assets/open-icon.svg";

export const NLink = styled(NavLink)`
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
`;

export const LinkCatalog = () => {
  return (
    <NLink to="/">
      <div>
        <SvgCatalog />
      </div>
    </NLink>
  );
};

export const LinkPrice = () => {
  return (
    <NLink to="/price">
      <div>
        <SvgPrice />
      </div>
    </NLink>
  );
};

export const LinkAbout = () => {
  return (
    <NLink to="/about">
      <div>
        <SvgPerson />
      </div>
    </NLink>
  );
};
