import postsData from "../posts.json";
import Article from "../components/article";
import Serach from "../components/Search";
import { useState } from "react";

function Homepage() {
  // let totalPost = 0;
  const [post, setPost] = useState(postsData);
  const [total, setTotal] = useState(0);

  const onchangeSearch = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPost(filteredPosts);

    // if (value === "") {
    //   setTotal(0);
    //   return;
    // }
    // setTotal(filteredPosts.length);

    value === "" ? setTotal(0) : setTotal(filteredPosts.length);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Serach onchangeSearch={onchangeSearch} totalPost={total} />
      {post.map((props, i) => {
        return <Article key={i} {...props} />;
      })}
    </>
  );
}
export default Homepage;
