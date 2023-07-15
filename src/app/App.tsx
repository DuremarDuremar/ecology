import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import arrayCategory from "../data/category";
import { LinkCatalog, LinkPrice, LinkAbout } from "../shared/link";
import { Main, Nav, Slider } from "../components";
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
                    content={<Slider data={arrayCategory} />}
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
                  <Main title="Прайс" />
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <Nav first={<LinkCatalog />} second={<LinkPrice />} />
                  <Main title="О нас" />
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
