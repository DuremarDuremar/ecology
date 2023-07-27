import React, { FC } from "react";
import { Content, Wrapper } from "./style";
import TitleCateg from "../../shared/titleCateg";

interface IProps {
  content?: JSX.Element;
  title?: string;
  subtitle?: string;
}

const Main: FC<IProps> = ({ content, title, subtitle }) => {
  return (
    <Content>
      <TitleCateg>
        {title} <span>{subtitle}</span>
      </TitleCateg>
      <Wrapper>{content}</Wrapper>
    </Content>
  );
};

export default Main;
