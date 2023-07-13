import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Logo from "../components/logo";
import { Content } from "./style";

const Layout = () => {
  return (
    <Content>
      <Header />
      <Logo />
      <Outlet />
    </Content>
  );
};

export default Layout;
