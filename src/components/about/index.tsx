import React, { FC } from "react";
import { Content, Person, Foto, Info } from "./style";

interface IItem {
  foto: string;
  name: string;
  prof: string;
  description: string;
}

interface IProps {
  data: IItem[];
}

const About: FC<IProps> = ({ data }) => {
  return (
    <Content>
      {data.map((item, index) => {
        return (
          <Person key={index}>
            <Foto>
              <img src={item.foto} alt={item.name} />
            </Foto>
            <Info>
              <h3>{item.name}</h3>
              <h4>{item.prof}</h4>
              <p>{item.description}</p>
            </Info>
          </Person>
        );
      })}
    </Content>
  );
};

export default About;
