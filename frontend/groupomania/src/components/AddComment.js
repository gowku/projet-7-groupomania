import axios from "axios";
import { useState } from "react";

const AddComment = (props) => {
  // console.log(props.user);
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
        `http://localhost:3000/api/comment/${props.postId}`,
        { userId: props.user.id, texte: commentInput.enteredComment },
        {
          headers: {
            Authorization: `Bearer ${props.token} `,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setIsClicked(false);
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
            <input type="texte" id="comment" onChange={SubmitCommentHandler} />
            <button type="submit">envoyer</button>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default AddComment;
