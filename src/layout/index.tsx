import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header, Logo, Footer } from "../components";

import { Content } from "./style";

interface IProps {
  res900: boolean;
}

const Layout: FC<IProps> = ({ res900 }) => {
  return (
    <Content>
      <Header />
      {res900 && <Logo />}
      <Outlet />
      <Footer />
    </Content>
  );
};

export default Layout;
