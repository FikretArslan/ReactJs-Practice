import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ekle } from "../store/slices/bookSlice";

const Products = () => {
  const bookList = useSelector((state) => state.book.bookList);
  const cart = useSelector((state) => state.book.cart);
  const dispatch = useDispatch();

  const toplSayi = cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        <span> Kitap Listesi</span>
        <Link to="/cart">Sepetim({toplSayi})</Link>
      </h2>
      {bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <p>Yazar:{book.author}</p>
            <p>Fiyat:&#8378;{book.price}</p>
            <button onClick={() => dispatch(ekle(book))}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
