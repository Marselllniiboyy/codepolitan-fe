import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import data from "./apis/data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "blue",
    fontSize: "40px",
    textTransform: "uppercase",
  };

  return <h1 style={style}>Warung Mariani</h1>;
}

function Menu() {
  const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {data.map((food, key) => (
            <Food key={key} foodsObj={food} />
          ))}
        </ul>
      ) : (
        <h1>Makanan Sedang Kosong</h1>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 14;
  const jamTutup = 22;
  let warung = "Buka";
  const isOpen = hour < jamTutup && hour >= jamBuka;

  if (isOpen) {
    return (
      <FooterOpenHour
        hour={hour}
        warung={warung}
        jamBuka={jamBuka}
        jamTutup={jamTutup}
      />
    );
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        Copyright {new Date().getFullYear()}, buka di jam {props.jamBuka} tutup
        di jam {props.jamTutup}
        <p>Warung sedang {props.warung}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>
        Maaf masih tutup datang lagi di jam {jamBuka}:00-{jamTutup}
        :00
      </p>
    </footer>
  );
}

function Food(props) {
  const { nama, foto, deskripsi, harga, stok } = props.foodsObj;
  return (
    <li className="food">
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{harga}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
