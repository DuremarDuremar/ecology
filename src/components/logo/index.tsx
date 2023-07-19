import React, { FC } from "react";
import { Content } from "./style";

interface IProps {
  logo: string;
}

const Logo: FC<IProps> = ({ logo }) => {
  return (
    <Content>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </Content>
  );
};

export default Logo;
