import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Layout from "../layout";
import { dataCategory, priceData, personsData } from "../data";
import { LinkCatalog, LinkPrice, LinkAbout } from "../shared/link";
import { Main, Nav, Slider, Price, About } from "../components";
import { Content, Global } from "./style";

function App() {
  const res900 = useMediaQuery({ query: "(min-width: 901px)" });
  const res630 = useMediaQuery({ query: "(min-width: 631px)" });

  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout res900={res900} />}>
            <Route
              index
              element={
                <>
                  <Nav first={<LinkPrice />} second={<LinkAbout />} />
                  <Main
                    content={<Slider data={dataCategory} res900={res900} />}
                    title="Виды Услуг"
                  />
                </>
              }
            />
            <Route
              path="price"
              element={
                <>
                  <Nav first={<LinkCatalog />} second={<LinkAbout />} />
                  <Main content={<Price data={priceData} />} title="Прайс" />
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <Nav first={<LinkPrice />} second={<LinkCatalog />} />
                  <Main content={<About data={personsData} />} title="О нас" />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Nav first={<LinkPrice />} second={<LinkAbout />} />
                  <Main title="Виды Услуг" />
                </>
              }
            />
          </Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
