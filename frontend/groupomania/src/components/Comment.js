import axios from "axios";
import { useEffect, useState } from "react";

const Comment = (props) => {
  // console.log(props);
  const commentId = props.comment.id;
  const postId = props.comment.CommentPost.postId;
  const token = props.token;

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${props.comment.userId}`, {
        headers: { Authorization: `Bearer ${props.token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);
  console.log(user);

  const [isAuthor, setIsAuthor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user.id === props.comment.userId) {
      setIsAuthor(true);
    }
  }, [localStorage.getItem("loggedIn")]);

  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    }
  }, [localStorage.getItem("loggedIn")]);

  const submitDeleteCommentHandler = (e) => {
    axios
      .delete(`http://localhost:3000/api/comment/${user.id}/${postId}/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isModified, setIsModified] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const submitModifiedCommentHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const formPutCommentHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3000/api/comment/${postId}/${commentId}`,
        { userId: user.id, texte: commentInput },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      {isModified ? (
        <>
          <form onSubmit={formPutCommentHandler}>
            <input placeholder={props.comment.texte} onChange={submitModifiedCommentHandler}></input>
            <button type="submit">envoyer</button>
          </form>
        </>
      ) : (
        <p>{props.comment.texte}</p>
      )}
      {isAuthor || isAdmin ? <button onClick={submitDeleteCommentHandler}>supprimer comment</button> : ""}
      {isAuthor || isAdmin ? (
        <button
          onClick={() => {
            setIsModified(true);
          }}
        >
          modifier comment
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
