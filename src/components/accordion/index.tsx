import React, { FC, useState } from "react";
import { Content, Title, Body } from "./style";

interface IProps {
  children: JSX.Element;
  Icon: string;
  title: string;
}

const Accordion: FC<IProps> = ({ children, Icon, title }) => {
  const [show, setShow] = useState(false);

  return (
    <Content>
      <Title onClick={() => setShow(!show)} show={show}>
        <div>
          <Icon />
        </div>
        <span>{title}</span>
        <span>{show ? "-" : "+"}</span>
      </Title>
      {show && <Body>{children}</Body>}
    </Content>
  );
};

export default Accordion;
