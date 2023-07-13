import React from "react";
import { Outlet } from "react-router-dom";

import { Content } from "./style";

const Layout = () => {
  return (
    <div>
      <h1>header</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
