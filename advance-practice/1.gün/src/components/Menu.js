import React from "react";
import listem from "../data/yemekmenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      {listem.map((liste) => {
        return <MenuItem key={liste.id} {...liste} />;
      })}
    </div>
  );
};

export default Menu;
