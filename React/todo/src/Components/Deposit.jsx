import { useEffect, useState } from "react";

function getPost() {
  return fetch(`https://jsonplaceholder.org/posts`).then((res) => {
    return res.json();
  });
}

export const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleDeposit = () => {
    setAmount(amount + 100);
  };

  console.log("Before");
  //   alert("Out Side");
  useEffect(() => {
    // alert("Inside Side");
    setLoading(true);
    setErr(false);
    console.log("Inside");

    setTimeout(() => {
      console.log("1000");
      getPost()
        .then((res) => {
          //   console.log(res);
          setPost(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setErr(true);
        });
      setLoading(false);
    }, 10000);
  }, []);
  //   alert("Out Side After");
  console.log("After");

  return (
    <>
      {loading && <div>Loading...</div>}
      {/* <h3>ATM</h3>
      <h4>{amount}</h4>
      <div>
        <button onClick={handleDeposit}>Deposit 100</button>
      </div>
      <div>
        <button onClick={() => setAmount(amount - 100)}>Withdraw 100</button>
      </div> */}
      {post.map((el) => {
        return (
          <ul key={el.id}>
            <li>
              {" "}
              <div>{el.title}</div>
            </li>
          </ul>
        );
      })}
    </>
  );
};
