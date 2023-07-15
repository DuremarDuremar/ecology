import React, { FC } from "react";
import { Content } from "./style";

interface IProps {
  first?: JSX.Element;
  second?: JSX.Element;
}

const Nav: FC<IProps> = ({ first, second }) => {
  return (
    <Content>
      {first}
      {second}
    </Content>
  );
};

export default Nav;
