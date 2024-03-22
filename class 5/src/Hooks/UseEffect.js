import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect hook is called after every render
  useEffect(() => {
    // Function to update the seconds state every second
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); // 1000 millisecond = 1 second

    // Cleanup function to clear the interval when the component unmounts or when seconds reach 10
    if (seconds >= 10) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]); // Updated dependency array to include 'seconds'

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds Elapsed: {seconds}</p>
      {seconds >= 10 && <p>Timer has ended!</p>}
    </div>
  );
};

export default UseEffect;
