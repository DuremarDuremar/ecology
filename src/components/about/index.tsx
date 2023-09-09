import React from "react";
import { Content, Persons, Send, Form } from "./style";

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
      <Send>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
          }}
        >
          <h4>Приглашаем к сотрудничеству</h4>
          <input type="text" placeholder="Ваше имя" name="name" />
          <input type="tel" placeholder="Номер телефона" name="message" />
          <input type="email" placeholder="Электронная почта" name="email" />
          <label htmlFor="tat">Ваша задача</label>
          <textarea name="" id="tat" cols={40} rows={6}></textarea>
          <button type="submit">Отправить</button>
        </Form>
      </Send>
    </Content>
  );
};

export default About;
