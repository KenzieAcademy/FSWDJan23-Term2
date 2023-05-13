import React, { useState } from "react";
import Form from "./Form";

const TableData = () => {
  const [users, setUsers] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  const handleAddUser = (user) => {
    const newUser = {
      id:
        users.reduce(
          (currMax, user) => {
            if (currMax < user.id) {
              currMax = user.id;
            }

            return currMax;
          },
          users.length ? users[0].id : 0
        ) + 1,
      ...user,
    };
    setUsers([...users, newUser]);
  };

  const handleClose = (e) => setDisplayForm((d) => !d);

  return (
    <div className="row">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {displayForm ? (
          <Form onSubmit={handleAddUser} onClose={handleClose} />
        ) : (
          <button onClick={(e) => setDisplayForm((d) => !d)}>Add User</button>
        )}
      </div>
    </div>
  );
};

export default TableData;
