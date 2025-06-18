import "./App.css";
// import Article from "./components/article";
// import About from "./components/about";
import Home from "./page/index";

function App() {
  // const articles = [];
  // for (let i = 1; i < 10; i++) {
  //   articles.push(<Article key={i} />);
  // }
  return (
    <div className="app">
      {/* <Article
        name="Marsel"
        umur="21"
        arr={["Penglumbaran Kangin", "Tiga", "Susut", "Bangli"]}
      />
      <Article
        name="Nanda"
        umur="18"
        arr={["Penglumbaran Kangin", "Tiga", "Susut", "Bangli"]}
      />
      <About /> */}
      <Home />
    </div>
  );
}

export default App;
