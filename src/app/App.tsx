import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Price, Catalog, About } from "../pages";

import { Content, Global } from "./style";

function App() {
  return (
    <>
      <Global />
      <Content>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path="price" element={<Price />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Catalog />} />
          </Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
