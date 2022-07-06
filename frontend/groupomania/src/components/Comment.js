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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NzEwMzkzMywiZXhwIjoxNjU3MTkwMzMzfQ.zxjbx0844wd6raO5d321SdRdgPTiiZyiQuJTolVYTr4 `,
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

  const [isClicked, setIsClicked] = useState(false);
  const toggleIsClicked = () => {
    setIsClicked((current) => !current);
  };

  return (
    <>
      <button onClick={toggleIsClicked}>commenter</button>
      {isClicked ? (
        <>
          <form onSubmit={formSubmitCommentHandler}>
            <label htmlFor="comment">ecrivez votre commentaire ici !</label>
            <input type="text" id="comment" onChange={SubmitCommentHandler} />
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Comment;
