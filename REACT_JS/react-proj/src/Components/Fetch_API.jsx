
import React, { useState, useEffect } from "react";

function Fetch_API() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  const filteredUsers = users.filter((user) =>
    (user.firstName + " " + user.lastName)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <h2>User Details</h2>

      <input
        type="text"
        placeholder="Search user name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={user.firstName} width="60" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length === 0 && <p>No users found!</p>}
    </>
  );
}

export default Fetch_API;
