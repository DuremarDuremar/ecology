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
  const [sort, setSort] = useState<number>(1);

  console.log("sort", sort);
  useEffect(() => {
    if (sort === 1) {
      setItems(sortBy(data, ["name"]));
    } else if (sort === 2) {
      setItems(sortBy(data, ["name"]).reverse());
    } else if (sort === 3) {
      setItems(sortBy(data, ["price"]));
    } else if (sort === 4) {
      setItems(sortBy(data, ["price"]).reverse());
    } else return;
  }, [sort]);

  return (
    <Content>
      <Sort>
        <button onClick={() => setSort((prev) => (prev === 1 ? 2 : 1))}>
          Наименование услуги{" "}
          {sort === 1 ? "(а-я)" : sort === 2 ? "(я-а)" : null}
        </button>
        <button onClick={() => setSort((prev) => (prev === 3 ? 4 : 3))}>
          Цена {sort === 3 ? "<" : sort === 4 ? ">" : null}
        </button>
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
