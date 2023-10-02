let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("response after 2 seconds");
    res(23);
  }, 5000);
});

p1.then((res) => {
  console.log(res);
});

// Akshay sain

// handle API by callBack function

const cart = ["shirt", "Shorts"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId); //gives us orderId
});

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});






