import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Logo from "../components/logo";
import { Content, Footer } from "./style";

const Layout = () => {
  return (
    <Content>
      <Header />
      <Logo />
      <Outlet />
      <Footer>
        <span>125993, г. Казань, ул. Б. Грузинская 4/6</span>
        <span>тел.+7 917 908 39 26</span>
        <span>email rpn77@rpn.gov.ru</span>
      </Footer>
    </Content>
  );
};

export default Layout;
