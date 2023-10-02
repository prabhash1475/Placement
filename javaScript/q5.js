// Callback

const perOne = (friend, callfriend) => {
  console.log(
    `I am busy right Now.I am talking to ${friend}. I will call you back later`
  );
  callfriend();
};

const perTwo = () => {
  console.log(`Hey whats's up. I call back dekha`);
};

perOne("Thapa", perTwo);
