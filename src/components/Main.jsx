import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

function Main() {
  const [menu, setMenu] = useState("Apple");
  const [search, setSearch] = useState([]);
  return (
    <div className="grid grid-rows-2">
      <Navbar setMenu={setMenu} setSearch={setSearch} />
      <Home menu={menu} />
    </div>
  );
}

export default Main;
