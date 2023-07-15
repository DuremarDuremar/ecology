import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NLink = styled(NavLink)``;

export const LinkCatalog = () => {
  return <NLink to="/">Catalog</NLink>;
};

export const LinkPrice = () => {
  return <NLink to="/price">price</NLink>;
};

export const LinkAbout = () => {
  return <NLink to="/about">about</NLink>;
};
