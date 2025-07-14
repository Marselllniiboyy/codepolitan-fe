import { useContext } from "react";
import { GlobalContext } from "../context";

function Test() {
  const { presiden } = useContext(GlobalContext);
  return (
    <>
      <h1>Hidup Bapak {presiden.name} raaaa🔥🔥🔥🔥🔥🔥🔥🔥</h1>
      <img
        src="https://statik.tempo.co/data/2018/10/12/id_740607/740607_720.jpg"
        alt="Jokowikuuuu"
        width={600}
      />
      <h2>Umur {presiden.age}</h2>
      <h3>Jabatan : {presiden.jabatan}</h3>
      <button>Biografi</button>
    </>
  );
}

export default Test;
