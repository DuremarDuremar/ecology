import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { dataCategory, priceData, personsData } from "../data";
import { LinkCatalog, LinkPrice, LinkAbout } from "../shared/link";
import { Main, Nav, Slider, Price, About } from "../components";
import { Content, Global } from "./style";

function App() {
  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Nav first={<LinkPrice />} second={<LinkAbout />} />
                  <Main
                    content={<Slider data={dataCategory} />}
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
                  <Nav first={<LinkCatalog />} second={<LinkPrice />} />
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
