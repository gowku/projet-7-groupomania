import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const UserList = (props) => {
  const token = props.token;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/admin`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => response.data)
      .then((users) => setUsers(users));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li>
          <User key={user.id} user={user} token={token} />
        </li>
      ))}
    </ul>
  );
};
export default UserList;
