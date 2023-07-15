import React, { FC, JSXElementConstructor } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Content } from "./style";

interface IItem {
  header: string;
  content: string[];
}

interface IProps {
  data: IItem[];
}

const Slider: FC<IProps> = ({ data }) => {
  const items = data.map((item: any, index: number) => {
    const style = { height: 300 + index * 10 };
    return (
      <Content className="item" style={style} data-value={index + 1}>
        <div>
          <h2>{item.header}</h2>
        </div>
        <ul>
          {item.content.map((i: string) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </Content>
    );
  });

  return <AliceCarousel autoHeight infinite mouseTracking items={items} />;
};

export default Slider;
