import axios from "axios";
import { useState } from "react";
// import { faThumbsUp } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />;

{
  /* <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> */
}
// import Comment from "./Comment";

const Post = (props) => {
  // console.log(props.post.likes);
  // const likes = props.post.likes[0].value;
  // let sum = 0;
  // if (!likes) {
  //   likes = 0;
  // } else {
  //   for (let i = 0; i < likes.length; i++) {
  //     sum += likes[i].value;
  //   }
  // }
  // console.log(likes[0].value);

  // const [myBool, setmyBool] = useState(true);

  // function toggleBool() {
  //   setmyBool(!myBool);
  // }

  const [likeInput, setLikeInput] = useState(false);
  const [dislikeInput, setDislikeInput] = useState(false);

  const submitLikeHandler = (e) => {
    setLikeInput(true);
    axios
      .post(
        "http://localhost:3000/api/like/1",
        { like: 1 },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NzEwMzkzMywiZXhwIjoxNjU3MTkwMzMzfQ.zxjbx0844wd6raO5d321SdRdgPTiiZyiQuJTolVYTr4 `,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  const submitDislikeHandler = (e) => {
    setLikeInput(true);
    axios
      .post(
        "http://localhost:3000/api/like/1",
        { like: -1 },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NzEwMzkzMywiZXhwIjoxNjU3MTkwMzMzfQ.zxjbx0844wd6raO5d321SdRdgPTiiZyiQuJTolVYTr4 `,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="post">
      <p>{props.post.firstName}</p>
      <p>{props.post.lastName}</p>
      <p>{props.post.updatedAt}</p>
      <img src={props.post.imageUrl}></img>
      <p>{props.post.texte}</p>
      {/* <p>${likes}</p> */}
      {/* <faThumbsUp /> */}
      <button onClick={submitLikeHandler}>like</button>
      <button onClick={submitDislikeHandler}>dislike</button>
      <button onClick={props.toggleBool}>écrire un commentaire</button>
      {/* <p>{myBool ? <Comment toggleBool={toggleBool} /> : ""}</p> */}
    </div>
  );
};
export default Post;
