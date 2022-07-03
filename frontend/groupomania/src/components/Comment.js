import axios from "axios";
import { useState } from "react";

const Comment = () => {
  const [commentInput, setCommentInput] = useState({
    enteredComment: "",
  });

  const SubmitCommentHandler = (e) => {
    setCommentInput({ ...commentInput, enteredComment: e.target.value });
  };

  const formSubmitCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/api/comment/1",
        { userId: 1, texte: commentInput.enteredComment },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Njg0NTIyMiwiZXhwIjoxNjU2OTMxNjIyfQ.Kbm3LEwF11bRN0siPNs9oqvBtGg8wNmsS-J8ZYc_eis `,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={formSubmitCommentHandler}>
      <label htmlFor="comment">ecrivez votre commentaire ici !</label>
      <input type="text" id="comment" onChange={SubmitCommentHandler} />
      <button type="submit">commenter</button>
    </form>
  );
};
export default Comment;
