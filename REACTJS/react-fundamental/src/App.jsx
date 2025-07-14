import "./App.css";
import Home from "./page/index";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
function App() {
  // const articles = [];
  // for (let i = 1; i < 10; i++) {
  //   articles.push(<Article key={i} />);
  // }
  const user = {
    userName: "Marsel",
    age: 25,
  };

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
      {/* pembuatan context{state management} */}
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
