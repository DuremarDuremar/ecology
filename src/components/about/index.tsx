import React from "react";
import { Content, Persons, Text } from "./style";

const About = () => {
  return (
    <Content>
      <Persons>
        <div>
          <h4>Сергей</h4>
          <div>тел. 8 917 908 39 26</div>
          <div>email: sergeink_777@mail.ru</div>
        </div>

        <div>
          <h4>Елена</h4>
          <div>тел. 8 927 458 91 89 </div>
          <div>email: 3182907@mail.ru</div>
        </div>
      </Persons>
      <Text></Text>
    </Content>
  );
};

export default About;