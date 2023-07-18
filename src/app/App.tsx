import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Layout from "../layout";
import { dataCategory, priceData, personsData } from "../data";
import { LinkCatalog, LinkPrice, LinkAbout } from "../shared/link";
import { Main, Nav, Slider, Price, About, Accordion } from "../components";
import { Content, Global } from "./style";

function App() {
  const res900 = useMediaQuery({ query: "(min-width: 901px)" });
  const res630 = useMediaQuery({ query: "(min-width: 631px)" });
  const res520 = useMediaQuery({ query: "(min-width: 521px)" });

  const section = [
    <Main
      content={
        <Slider
          data={dataCategory}
          res900={res900}
          res630={res630}
          res520={res520}
        />
      }
      title="Виды Услуг"
    />,
    <Main content={<Price data={priceData} />} title="Прайс" />,
    <Main content={<About data={personsData} />} title="О нас" />,
  ];

  const sectionAc = (n: number) => {
    return <Accordion>{section[n]}</Accordion>;
  };

  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout res900={res900} />}>
            <Route
              index
              element={
                res900 ? (
                  <>
                    <Nav first={<LinkPrice />} second={<LinkAbout />} />
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
              path="price"
              element={
                res900 ? (
                  <>
                    <Nav first={<LinkCatalog />} second={<LinkAbout />} />
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
              path="about"
              element={
                res900 ? (
                  <>
                    <Nav first={<LinkPrice />} second={<LinkCatalog />} />
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
                    <Nav first={<LinkPrice />} second={<LinkAbout />} />
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
