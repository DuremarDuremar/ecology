import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Layout from "../layout";
import { dataCategory, priceData } from "../data";
import Link from "../shared/link";
import { Main, Nav, Slider, Price, About, Accordion } from "../components";
import { ReactComponent as SvgPrice } from "../assets/price-icon.svg";
import { ReactComponent as SvgPerson } from "../assets/user-icon.svg";
import { ReactComponent as SvgCatalog } from "../assets/open-icon.svg";
import { Content, Global } from "./style";

function App() {
  const res900 = useMediaQuery({ query: "(min-width: 901px)" });
  const res630 = useMediaQuery({ query: "(min-width: 631px)" });
  const res480 = useMediaQuery({ query: "(min-width: 481px)" });
  const res390 = useMediaQuery({ query: "(min-width: 391px)" });

  const section = [
    <Main
      content={
        <Slider
          data={dataCategory}
          res900={res900}
          res630={res630}
          res480={res480}
          res390={res390}
        />
      }
      title="Виды Услуг"
      subtitle="(по экологическим категориям)"
    />,
    <Main content={<Price data={priceData} />} title="Прайс" />,
    <Main content={<About />} title="Контакты" />,
  ];

  const icons = [SvgCatalog, SvgPrice, SvgPerson];

  const titleAc = ["каталог", "прайс", "контакты"];

  const sectionAc = (n: number) => {
    return (
      <Accordion Icon={icons[n]} title={titleAc[n]}>
        {section[n]}
      </Accordion>
    );
  };

  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout res900={res900} res480={res480} />}>
            <Route
              index
              element={
                res900 ? (
                  <>
                    <Nav
                      first={<Link Icon={SvgPrice} link="/price" />}
                      second={<Link Icon={SvgPerson} link="/about" />}
                    />
                    {section[0]}
                  </>
                ) : (
                  <>
                    {section[0]}, {sectionAc(1)}, {sectionAc(2)}
                  </>
                )
              }
            />
            <Route
              path="/price"
              element={
                res900 ? (
                  <>
                    <Nav
                      first={<Link Icon={SvgCatalog} link="/" />}
                      second={<Link Icon={SvgPerson} link="/about" />}
                    />
                    {section[1]}
                  </>
                ) : (
                  <>
                    {section[1]}, {sectionAc(0)}, {sectionAc(2)}
                  </>
                )
              }
            />
            <Route
              path="/about"
              element={
                res900 ? (
                  <>
                    <Nav
                      first={<Link Icon={SvgPrice} link="/price" />}
                      second={<Link Icon={SvgCatalog} link="/" />}
                    />
                    {section[2]}
                  </>
                ) : (
                  <>
                    {section[2]}, {sectionAc(0)}, {sectionAc(1)}
                  </>
                )
              }
            />
            <Route
              path="*"
              element={
                res900 ? (
                  <>
                    <Nav
                      first={<Link Icon={SvgPrice} link="/price" />}
                      second={<Link Icon={SvgPerson} link="/about" />}
                    />
                    {section[0]}
                  </>
                ) : (
                  <>
                    {section[0]}, {sectionAc(1)}, {sectionAc(2)}
                  </>
                )
              }
            />
          </Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
