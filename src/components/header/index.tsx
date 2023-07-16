import React from "react";
import { Content } from "./style";
import { ReactComponent as SvgPhone } from "../../assets/phone-icon.svg";

const Header = () => {
  return (
    <Content>
      <h1>
        Эко-агенство <strong>Дивия</strong>
      </h1>

      <div>
        <a href="tel:+79179083926">
          <SvgPhone /> +7-917-908-39-26
        </a>
        <h3>честность, результат & экологичность</h3>
      </div>
    </Content>
  );
};

export default Header;
