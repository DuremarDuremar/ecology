import React, { FC } from "react";
import { Content, Fon } from "./style";
import { ReactComponent as SvgPhone } from "../../assets/phone-icon.svg";

interface IProps {
  logo: string;
  res900: boolean;
  res480: boolean;
}

const Header: FC<IProps> = ({ logo, res900, res480 }) => {
  return (
    <Content res900={res900}>
      <h1>
        Экологические услуги {!res480 ? <br /> : "- "}
        <strong>ИП Куляпин С.Н.</strong>
      </h1>

      <div>
        <div>
          <a href="tel:+79274589189">
            <SvgPhone /> +7-927-458-91-89
          </a>
          <a href="tel:+79179083926">
            <SvgPhone /> +7-917-908-39-26
          </a>
        </div>

        <h3>быстро, качественно {!res900 && <br />}& компетентно</h3>
      </div>
      {!res900 && (
        <Fon>
          <img src={logo} alt="logo" />
        </Fon>
      )}
    </Content>
  );
};

export default Header;
