import React, { FC } from "react";
import { Content, Wrapper } from "./style";
import TitleCateg from "../../shared/titleCateg";

interface IProps {
  content?: JSX.Element;
  title?: string;
}

const Main: FC<IProps> = ({ content, title }) => {
  return (
    <Content>
      <TitleCateg>{title}</TitleCateg>
      <Wrapper>{content}</Wrapper>
    </Content>
  );
};

export default Main;
