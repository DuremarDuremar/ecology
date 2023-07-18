import React, { FC, useState } from "react";
import { Content, Title, Body } from "./style";

interface IProps {
  children: JSX.Element;
}

const Accordion: FC<IProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Content>
      <Title onClick={() => setShow(!show)}>
        <div>123</div>
        <div>{show ? "-" : "+"}</div>
      </Title>
      {show && <Body>{children}</Body>}
    </Content>
  );
};

export default Accordion;
