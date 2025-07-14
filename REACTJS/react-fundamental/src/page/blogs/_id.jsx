import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingglePost() {
  const [post, setPost] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
    <>
      <div>
        {/* jika post sudah ada maka tampilkan "?" */}
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
          labore, deserunt obcaecati enim ratione expedita consequuntur. Libero
          magnam qui officia, vero sed perspiciatis nihil labore, distinctio
          dolorum veniam neque.
        </p>
      </div>
    </>
  );
}

export default SingglePost;
