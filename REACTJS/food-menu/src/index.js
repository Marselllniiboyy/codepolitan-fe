import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      <Food
        nama="Nasi Goreng"
        harga={25000}
        deskripsi="Nasi gorang enak banget pakai daging babi ultimate HARAM"
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        harga={35000}
        deskripsi="Sate ayam campur daging babi anjayyyy"
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 9;
  const jamTutup = 22;
  let warung = "Buka";

  if (hour < jamBuka || hour > jamTutup) {
    warung = "Tutup";
    alert("Warung Mariani Tutup");
  }

  return (
    <footer className="footer">
      Copyright {new Date().getFullYear()}, buka di jam {jamBuka} tutup di jam{" "}
      {jamTutup}
      <p>Warung sedang {warung}</p>
    </footer>
  );
}

function Food(props) {
  return (
    <div className="foods">
      <img src={props.foto} alt={props.nama} width={100} height={70} />
      <div className="food">
        <h3>{props.nama}</h3>
        <p>{props.deskripsi}</p>
        <span>{props.harga}</span>
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
