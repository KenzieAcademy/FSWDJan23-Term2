import { useState } from "react";
import "./UserListData.css";

const UserListData = ({ name, age, location }) => {
  const [ageState, setAgeState] = useState(age);

  const happyBirthday = () => setAgeState(ageState + 1);

  return (
    <li className="user-data">
      <h3>{name}</h3>
      <p>Age: {ageState}</p>
      <p>Location: {location}</p>
      <button onClick={happyBirthday}>Get Older</button>
    </li>
  );
};

export default UserListData;
