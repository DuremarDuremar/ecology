import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header, Logo, Footer } from "../components";
import logo from "../assets/logo.jpg";

import { Content } from "./style";

interface IProps {
  res900: boolean;
}

const Layout: FC<IProps> = ({ res900 }) => {
  return (
    <Content>
      <Header logo={logo} res900={res900} />
      {res900 && <Logo logo={logo} />}
      <Outlet />
      <Footer />
    </Content>
  );
};

export default Layout;
