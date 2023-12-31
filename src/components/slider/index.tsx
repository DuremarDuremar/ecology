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
  res900: boolean;
  res630: boolean;
  res480: boolean;
  res390: boolean;
}

const Slider: FC<IProps> = ({ data, res900, res630, res480, res390 }) => {
  const items = data.map((item: any, index: number) => {
    const style = res900
      ? { height: 110 + item.content.length * 25 }
      : res630
      ? { height: 110 + item.content.length * 30 }
      : res480
      ? { height: 110 + item.content.length * 33 }
      : res390
      ? { height: 110 + item.content.length * 47 }
      : { height: 100 + item.content.join().length * 0.78 };

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
