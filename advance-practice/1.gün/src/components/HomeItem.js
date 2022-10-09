import React from "react";

const HomeItem = ({ id, image, price, title, company }) => {
  /* const { image, title, price } = props; */
  return (
    <div className="card">
      <img
        src={require(`../assets/img/product${id}.jpg`)}
        alt=""
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <h3>{company}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default HomeItem;
