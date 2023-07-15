import React, { FC, useState, useEffect } from "react";
import sortBy from "lodash.sortby";
import { Content, List, Sort } from "./style";

interface IItem {
  name: string;
  price: string;
}

interface IProps {
  data: IItem[];
}

const Price: FC<IProps> = ({ data }) => {
  const [items, setItems] = useState<IItem[]>([]);
  const [sortName, setSortName] = useState<boolean>(true);
  const [sortPrice, setSortPrice] = useState<boolean>(false);

  useEffect(() => {
    setItems(sortBy(data, ["name"]));
  }, [data]);

  return (
    <Content>
      <Sort>
        <button>Наименование услуги</button>
        <button>Цена</button>
      </Sort>
      <List>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <h5>{item.name}</h5>

              <h6>{item.price}</h6>
            </li>
          );
        })}
      </List>
    </Content>
  );
};

export default Price;
