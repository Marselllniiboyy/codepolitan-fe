import { useContext } from "react";
import { GlobalContext } from "../context";

function NewArticle({ isNew }) {
  return isNew && <span> NEW BRADERRR!</span>;
}

function NewArticle2() {
  return <span> NEW BANG </span>;
}

function Article(props) {
  // const name = "Marsel";
  // const arr = ["Penglumbaran Kangin", "Tiga", "Susut", "Bangli"];
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        date at :{props.date}, tag: {props.tags.join(", ")}
        {/* {props.isNew && " NEW!!"} */}
        <NewArticle isNew={props.isNew} />
        {props.isNew && <NewArticle2 />}
      </small>
      <div>
        <small>
          ditulis oleh : {user.userName} dengan umur {user.age}
        </small>
      </div>
    </>
  );
}
export default Article;
