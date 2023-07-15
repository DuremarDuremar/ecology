import React, { FC, useState, useEffect } from "react";
import sortBy from "lodash.sortby";
import { Content } from "./style";

interface IItem {
  name: string;
  price: string;
}

interface IProps {
  data: IItem[];
}

const Price: FC<IProps> = ({ data }) => {
  const [items, setItems] = useState<IItem[]>([]);

  console.log("items", items);

  useEffect(() => {
    setItems(sortBy(data, ["name"]));
  }, [data]);

  return (
    <Content>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <h5>{item.name}</h5>

            <h6>{item.price}</h6>
          </li>
        );
      })}
    </Content>
  );
};

export default Price;
