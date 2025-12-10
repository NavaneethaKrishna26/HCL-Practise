import { useEffect, useState } from "react";
import "../Styles/styles.css";
function UserList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=1");
      if (!response.ok) {
        throw new Error("Not found");
      }
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Random Users</h2>
      <button onClick={fetchUsers}>Reload Users</button>

      <div className="user-grid">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <img src={user.picture.large} alt="" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.email}</p>
            <p>{user.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
