import React, { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Content, Dot } from "./style";

interface IItem {
  header: string;
  content: string[];
}

interface IProps {
  data: IItem[];
}

const Slider: FC<IProps> = ({ data }) => {
  const items = data.map((item: any, index: number) => {
    const style = { height: 110 + item.content.length * 25 };
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
  const renderDotsItem = ({ isActive }: any) => {
    return isActive ? <Dot active /> : <Dot />;
  };
  return (
    <AliceCarousel
      autoHeight
      infinite
      mouseTracking
      disableButtonsControls
      renderDotsItem={renderDotsItem}
      items={items}
    />
  );
};

export default Slider;
