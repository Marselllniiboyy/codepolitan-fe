function Article(props) {
  // const name = "Marsel";
  // const arr = ["Penglumbaran Kangin", "Tiga", "Susut", "Bangli"];
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        date at :{props.date}, tag: {props.tags.join(", ")}
      </small>
    </>
  );
}
export default Article;
