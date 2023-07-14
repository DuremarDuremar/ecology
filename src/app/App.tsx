import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import arrayCategory from "../data/catigory";
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
                  <Nav />
                  <Main content={<Slider data={arrayCategory} />} />
                </>
              }
            />
            <Route
              path="price"
              element={
                <>
                  <Nav />
                  <Main />
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <Nav />
                  <Main />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Nav />
                  <Main />
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
