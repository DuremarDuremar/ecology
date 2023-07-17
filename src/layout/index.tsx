import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Logo from "../components/logo";
import { Content, Footer } from "./style";

interface IProps {
  res900: boolean;
}

const Layout: FC<IProps> = ({ res900 }) => {
  return (
    <Content>
      <Header />
      {res900 && <Logo />}
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
