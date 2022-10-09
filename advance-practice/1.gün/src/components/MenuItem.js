import React from "react";

const MenuItem = ({ id, img, category, desc, price }) => {
  return (
    <div className="card">
      <img src={img} alt="" width={200} height={200} />

      <h3>{price}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default MenuItem;
