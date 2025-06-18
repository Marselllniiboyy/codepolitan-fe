import { useState } from "react";

function Serach(props) {
  const [search, setSearch] = useState("");
  const onchangeSerach = (event) => {
    setSearch(event.target.value);
    props.onchangeSearch(event.target.value);
  };
  return (
    <>
      <div>
        Serach article: <input type="text" onChange={onchangeSerach} />
      </div>
      <div>
        Ditemuakan {props.totalPost} data dengan pencaharian {search}
      </div>
    </>
  );
}

export default Serach;
