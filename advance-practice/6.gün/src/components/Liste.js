import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ekle, isaretle, temizle } from "../store/slices/listeSlice";

const Liste = () => {
  const liste = useSelector((state) => state.liste.liste);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <h1>YAPILACAKLAR LİSTESİ</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(ekle(text));
          setText("");
        }}
      >
        Ekle
      </button>

      <div>
        {liste.map((item) => (
          <div
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
            onClick={() => dispatch(isaretle(item.id))}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(temizle())}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};

export default Liste;
