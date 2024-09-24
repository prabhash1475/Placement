import { useEffect, useState } from "react";

export const SmallTimer = () => {
  const [timer, setTimer] = useState(5);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setTimer((prevTimer)=>prevTimer-1))
  //     }, 1000)
  //   }, [])
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Components Unmounted");
    };
  }, []);

  return (
    <>
      <h1>Timer:{timer}</h1>
    </>
  );
};

/* 
1.first we create timer     
2.we create timer with the help of setInterval
 * ALWAYS remember in setinterval and setTimeout
  we do not have to update function normally 
  instead of that we have to update withe the help of 
  call back function with the help of cb we have 
  smooth experience of ui other wise it behave weirdly

3. we create cleanup function which will get
    triggered in unmounting phase
*/



function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // Outputs: "I am from the outer function"