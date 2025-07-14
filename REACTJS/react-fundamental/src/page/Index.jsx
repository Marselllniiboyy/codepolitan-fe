import postsData from "../posts.json";
import Article from "../components/Article";
import Serach from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  // let totalPost = 0;
  const [post, setPost] = useState(postsData);
  const [total, setTotal] = useState(0);

  // test Kemampuan Sendiri
  // const [title, setTitle] = useState("");
  // const [img, setImg] = useState("");
  // const [desc, setDesc] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");

  // externalpost
  const [externalPost, setExternalPost] = useState([]);

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

    // ComponentDidMount
    //Comnponent DidUpdate
    // ComponentWillUnmount
  };

  // useEffect(() => {
  //   //  fetch("https://fakestoreapi.com/products/1")
  //   //   .then((res) => res.json())
  //   //   .then((json) => console.log(json));

  //   const fetchData = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products/1");
  //     const data = await res.json();
  //     setTitle(data.title);
  //     setImg(data.image);
  //     setDesc(data.description);
  //     setCategory(data.category);
  //     setPrice(data.price);
  //   };
  //   fetchData();

  //   return () => {
  //     console.log("Cleanup Event Listener");
  //   };
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPost(json));
  }, []);

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

      {/* <div className="cart">
        <img src={img} alt="tas" />
        <h3>{title}</h3>
        <p>
          {price} - {category}
        </p>
      </div>
      <div className="cart">
        <img src={img} alt="tas" />
        <h3>{title}</h3>
        <p>
          {price} - {category}
        </p>
      </div> */}

      <h2>
        External Posts
        {externalPost.map((item, index) => (
          <div key={index}> - {item.title}</div>
        ))}
      </h2>
    </>
  );
}
export default Homepage;
