import { useState } from "react";

const getPost = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then(
    (res) => {
      return res.json();
    }
  );
};

export const Getpost = () => {
  const [posts, setPosts] = useState([]);

  const getDataAndUpdate = async () => {
    try {
      // make A API call
      // get the data

      let data = await getPost();
      console.log(data);

      //   update the data
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={getDataAndUpdate}>Get Post</button>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>
            {`${el.id}. `}
            {el.title}
          </li>
        ))}
      </ul>
    </>
  );
};
