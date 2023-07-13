import React from "react";
import { Content } from "./style";
import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <Content>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </Content>
  );
};

export default Logo;
