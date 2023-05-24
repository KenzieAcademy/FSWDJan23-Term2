import { useState, useEffect } from "react";

const TimeSpent = () => {
  const [timeInApp, setTimeInApp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInApp((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <p>You have been using this app for {timeInApp} seconds</p>;
};

export default TimeSpent;
