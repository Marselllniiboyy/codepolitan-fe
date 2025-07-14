import { useState } from "react";

function Serach(props) {
  const [search, setSearch] = useState("");

  const defultSerch = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      props.onchangeSearch(search);
    }
  };

  const onchangeSerach = () => {
    props.onchangeSearch(search);
  };

  const onKeySearch = (e) => {
    if (e.key === "Enter") {
      onchangeSerach();
    }
  };

  return (
    <>
      <div>
        Serach article:{" "}
        <input type="text" onChange={defultSerch} onKeyDown={onKeySearch} />
        <button onClick={onchangeSerach}>Cari</button>
      </div>
      <div>
        Ditemuakan {props.totalPost} data dengan pencaharian {search}
      </div>
    </>
  );
}

export default Serach;
