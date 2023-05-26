import { useEffect, useRef, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(5);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((time) => {
        if (time > 0) return time - 1;
        return time;
      });
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="timer">
      <h2>Timer: {time}</h2>
    </div>
  );
};

export default Timer;
