import axios from "axios";
import { useEffect, useState } from "react";

const Comment = (props) => {
  //   console.log(props.comment);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${props.comment.userId}`, {
        headers: { Authorization: `Bearer ${props.token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);
  //   console.log(user);

  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{props.comment.texte}</p>
    </div>
  );
};

export default Comment;
