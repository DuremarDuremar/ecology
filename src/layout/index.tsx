import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header, Logo } from "../components";
import logo from "../assets/logo.jpg";

import { Content } from "./style";

interface IProps {
  res900: boolean;
  res480: boolean;
}

const Layout: FC<IProps> = ({ res900, res480 }) => {
  return (
    <Content>
      <Header logo={logo} res900={res900} res480={res480} />
      {res900 && <Logo logo={logo} />}
      <Outlet />
    </Content>
  );
};

export default Layout;
