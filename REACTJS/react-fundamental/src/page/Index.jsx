import postsData from "../posts.json";
import Article from "../components/Article";
import Serach from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [post, setPost] = useState(postsData);
  const [total, setTotal] = useState(0);

  // test Kemampuan Sendiri
  // const [title, setTitle] = useState("");
  // const [img, setImg] = useState("");
  // const [desc, setDesc] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");

  const onchangeSearch = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPost(filteredPosts);

    value === "" ? setTotal(0) : setTotal(filteredPosts.length);

    // ComponentDidMount
    //Comnponent DidUpdate
    // ComponentWillUnmount
  };

  useEffect(() => {
    console.log("ada post baru");
  }, [post]);
  return (
    <>
      <h1>Simple Blog</h1>
      <Serach onchangeSearch={onchangeSearch} totalPost={total} />
      {post.map((props, i) => {
        return <Article key={i} {...props} name={name} />;
      })}
    </>
  );
}
export default Homepage;
