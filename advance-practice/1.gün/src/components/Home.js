import React from "react";
import products from "../data/products";
import HomeItem from "./HomeItem";
import urunler from "../data/urunler";
import items from "../data/items";
import SectionItem from "./SectionItem";

const Home = () => {
  return (
    <>
      <SectionItem
        title="TECHNO MARKET"
        part1="Anasayfa"
        part2="İletişim"
        part3="Yorumlar"
      />
      <div className="products">
        {/*  {products.map((product) => {
        const { id, image, title, price } = product;
        return (
          <>
            <HomeItem key={id} image={image} title={title} price={price} />
          </>
        );
      })} */}

        {urunler.map((urun) => {
          return (
            <>
              <HomeItem key={urun.id} {...urun} />
            </>
          );
        })}

        {/*  {items.map((item) => {
        return (
          <>
            <HomeItem key={item.id} {...item} />
          </>
        );
      })} */}
      </div>

      <SectionItem
        title="2023 ÜRÜNLERİMİZ"
        part1="computers"
        part2="phones"
        part3="tablets"
      />
    </>
  );
};

export default Home;
