import React, { FC } from "react";
import { Content, Wrapper } from "./style";

interface IProps {
  content?: JSX.Element;
}

const Main: FC<IProps> = ({ content }) => {
  return (
    <Content>
      <Wrapper>{content}</Wrapper>
    </Content>
  );
};

export default Main;
