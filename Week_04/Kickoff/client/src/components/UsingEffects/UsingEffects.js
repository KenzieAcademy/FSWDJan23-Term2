import React, { useEffect, useState } from "react";
import useCounter from "../../hooks/useCounter";

const UsingEffects = () => {
  const [user, setUser] = useState();
  const { count, increaseCount } = useCounter(0);

  console.log("Render");

  /**
   * - Empty dependency array: useEffect will execute callback ONLY
   * on initial mounting of component
   *
   */
  useEffect(() => {
    setTimeout(() => setUser({ name: "Sergei Bobrovsky" }), 500);
  }, []);

  /**
   * - Populated dependency array: useEffect will execute callback
   * on initil mounting of component AND every time the value(s) in
   * the dependency array are different than the previous render
   */
  useEffect(() => {
    if (count === 20) {
      alert("WOW WHAT A SAVE " + user.name + "!!");
    }
    console.log("they have", count);

    return () => {
      // if an update useEffect returns a cleanup method,
      // it will run before the next update callback
      console.log("They had " + count + " saves, now");
    };
  }, [count]);

  /**
   * If the initial mount useEffect returns a function,
   * that function is called a cleanup method. It will only run when
   * the component is about to be unmounted
   */
  useEffect(() => {
    return () => {
      // this is a cleanup method
      alert("Thanks for everything Bob!");
    };
  }, []);

  if (!user) return <div>Loading, please wait...</div>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Shots saved: {count}</p>
      <button className="btn btn-info" onClick={increaseCount}>
        What a save!
      </button>
    </div>
  );
};

export default UsingEffects;
