import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  // externalpost
  const [externalPost, setExternalPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPost(json));
  }, []);

  return (
    <h2>
      External Posts
      {externalPost.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </h2>
  );
}

export default Blog;
