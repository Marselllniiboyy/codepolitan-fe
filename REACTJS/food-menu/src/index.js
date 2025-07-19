import React from "react";
import ReactDom from "react-dom/client";
import Nav from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Menu />
      <Footer />
    </>
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
    <>
      <h2>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
      <Food />
      <Food />
      <Food />
      <Food />
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const jamBuka = 14;
  const jamTutup = 22;
  let warung = "Buka";

  if (hour < jamBuka || hour > jamTutup) {
    warung = "Tutup";
    alert("Warung Mariani Tutup");
  }

  return (
    <footer>
      Copyright {new Date().getFullYear()}, buka di jam {jamBuka} tutup di jam{" "}
      {jamTutup}
      <p>Warung sedang {warung}</p>
    </footer>
  );
}

function Food() {
  return (
    <>
      <img src="food/nasi-babi.jpg" alt="" width={100} height={70} />
      <h2>Babi Gooling</h2>
      <p>lorem</p>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
