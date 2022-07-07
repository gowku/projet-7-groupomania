import axios from "axios";
import { useEffect, useState } from "react";
// import { faThumbsUp } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />;

// {
//    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
// }

const Post = (props) => {
  // console.log(props);

  // const [myBool, setmyBool] = useState(true);

  // function toggleBool() {
  //   setmyBool(!myBool);
  // }
  const postId = props.post.id;
  const token = props.token;

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${props.post.userId}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);
  // console.log(user);

  const [likeInput, setLikeInput] = useState(false);
  const [dislikeInput, setDislikeInput] = useState(false);

  const submitLikeHandler = (e) => {
    setLikeInput(true);
    axios
      .post(
        `http://localhost:3000/api/like/${postId}`,
        { like: 1 },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  const submitDislikeHandler = (e) => {
    setDislikeInput(true);
    axios
      .post(
        `http://localhost:3000/api/like/${postId}`,
        { like: -1 },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  const submitDeletePostHandler = (e) => {
    axios
      .delete(`http://localhost:3000/api/posts/${postId}`, {
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
  // console.log(props.post);

  return (
    <div className="post">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{props.post.updatedAt}</p>
      <img src={props.post.imageUrl}></img>
      <p>{props.post.texte}</p>
      <p>{props.post.likes.length} like</p>
      {/* <faThumbsUp /> */}
      <button onClick={submitLikeHandler}>like</button>
      <button onClick={submitDislikeHandler}>dislike</button>
      <button onClick={submitDeletePostHandler}>supprimer post</button>
    </div>
  );
};
export default Post;
