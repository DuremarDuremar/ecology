import React, { FC } from "react";
import { Content, Fon } from "./style";
import { ReactComponent as SvgPhone } from "../../assets/phone-icon.svg";

interface IProps {
  logo: string;
  res900: boolean;
}

const Header: FC<IProps> = ({ logo, res900 }) => {
  return (
    <Content res900={res900}>
      <h1>
        Экологические услуги - <strong>ИП Куляпин С.Н.</strong>
      </h1>

      <div>
        <a href="tel:+79179083926">
          <SvgPhone /> +7-917-908-39-26
        </a>
        <h3>честно, быстро {!res900 && <br />}& компетентно</h3>
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
