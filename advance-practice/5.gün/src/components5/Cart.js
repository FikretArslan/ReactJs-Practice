import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { arttir, azalt, cikart } from "../store/book/bookActions";

const Cart = () => {
  const { bookState, dispatchBook } = useStore();
  const { cart } = bookState;

  const toplFiyat = cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const toplSayi = cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Sepetim({toplSayi})</span>
        <Link to="/">Kitap Listesi</Link>
      </h2>
      <h3>Toplam Sepet Tutarı : &#8378;{toplFiyat} </h3>

      {cart.map(({ id, name, price, author, image, count }) => (
        <div className="book" key={id}>
          <img src={image} alt={name} />
          <div>
            <p>Yazar:{author}</p>
            <p>Fiyat:&#8378;{price} </p>
            <p>Toplam:&#8378; {(price * count).toFixed(2)} </p>
            <p>
              Sepetinizde {name} kitabından toplam {count} adet var.
            </p>
            <button onClick={() => dispatchBook(azalt(id))}>-</button>
            <button onClick={() => dispatchBook(cikart(id))}>
              Sepetten Çıkart
            </button>
            <button onClick={() => dispatchBook(arttir(id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
