import { useEffect, useState } from "react";
const getPost = (page) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  ).then((res) => {
    return res.json();
  });
};

export const Useeffect = () => {
  const [post, setPost] = useState([]);
  const [loding, setLoding] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch total number of posts to calculate total pages
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.floor(data.length / 10)); // Assuming 10 posts per page
        console.log(data.length);
      });
    console.log("totalPage-", totalPages);
  }, []);

  useEffect(() => {
    updateOnui(page);
  }, [page]);

  const updateOnui = async (page = 1) => {
    try {
      setLoding(true);
      const data = await getPost(page);

      console.log(data);
      //   console.log("totalPage-", totalPages);

      setLoding(false);

      setPost(data);
    } catch (err) {
      setLoding(false);

      console.log(err);
    }
  };

  const handlePageChange = (changeBy) => {
    setPage(page + changeBy);
  };

  if (loding) {
    return <h3>Lodding...</h3>;
  }

  return (
    <>
      {/* {loding && <h3>Lodding</h3>} */}
      <h3>Posts </h3>
      <ul>
        {post.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {" "}
                {item.id} {"--"} {item.title}
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={() => handlePageChange(-1)} disabled={page == 1}>
        Prev
      </button>
      <button>{page}</button>
      <button
        disabled={totalPages === page}
        onClick={() => handlePageChange(1)}
      >
        Next
      </button>
    </>
  );
};
