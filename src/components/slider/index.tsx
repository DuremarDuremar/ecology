import React, { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Content } from "./style";

interface IProps {
  data?: any;
}

const itemsLength = Array.from({ length: 5 });

const Slider: FC<IProps> = ({ data }) => {
  const items = data.map((item: any, index: number) => {
    const style = { height: 200 + index * 10 };
    return (
      <div className="item" style={style} data-value={index + 1}>
        {item}
      </div>
    );
  });

  return (
    <Content>
      <AliceCarousel autoHeight infinite mouseTracking items={items} />
    </Content>
  );
};

export default Slider;
