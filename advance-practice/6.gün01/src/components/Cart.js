import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { arttir, azalt, cikart } from "../store/slices/bookSlice";

const Cart = () => {
  const cart = useSelector((state) => state.book.cart);
  const dispatch = useDispatch();

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
        <Link to="/">Kitap Listesi</Link> <span>Sepetim({toplSayi})</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{toplFiyat}</h3>

      {cart.map(({ id, name, price, author, image, count }) => (
        <div className="book" key={id}>
          <img src={image} alt={name} />
          <div>
            <p>Yazar:{author}</p>
            <p>Fiyat: &#8378;{price}</p>
            <p>Toplam: &#8378;{(price * count).toFixed(2)}</p>
            <p>Sepetinizde bu kitaptan toplam {count} adet var.</p>
            <button onClick={() => dispatch(azalt (id))}>-</button>
            <button onClick={() => dispatch(cikart (id))}>Sepetten Çıkar</button>
            <button onClick={() => dispatch(arttir  (id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
