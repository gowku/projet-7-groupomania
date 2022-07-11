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
  console.log(props);

  //calcul du nombre de like par post
  let likeValue = 0;
  props.post.likes.map((e) => {
    likeValue += e.value;
    // console.log(likeValue);
  });

  const postId = props.post.id;
  const token = props.token;

  //récuperer les infos de l'utilisateur connecté
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${props.post.userId}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);

  //gerer les likes
  const [likeInput, setLikeInput] = useState(false);
  const [dislikeInput, setDislikeInput] = useState(false);

  const submitLikeHandler = (e) => {
    let like;
    setLikeInput((current) => !current);
    {
      likeInput ? (like = 1) : (like = 0);
    }
    // console.log(like);

    axios
      .post(
        `http://localhost:3000/api/like/${postId}`,
        {
          like: like,
        },
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
    let like;
    setDislikeInput((current) => !current);
    {
      dislikeInput ? (like = -1) : (like = 0);
    }
    // console.log(like);
    axios
      .post(
        `http://localhost:3000/api/like/${postId}`,
        { like: like },
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

  const [isAuthor, setIsAuthor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(isAuthor, isAdmin);
  // const isAdmin = props.roles[0];
  // const isAuthor = props.roles[1];

  useEffect(() => {
    if (user.id === props.post.userId) {
      setIsAuthor(true);
    }
  }, [localStorage.getItem("loggedIn")]);

  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    }
  }, [localStorage.getItem("loggedIn")]);

  const [isClicked, setIsClicked] = useState(false);
  const toggleIsClicked = () => {
    setIsClicked((current) => !current);
  };

  const [imageUrl, setImageUrl] = useState("null");
  const [description, setDescription] = useState("null");

  const submitPostImageHandler = (e) => {
    setImageUrl(e.target.files[0]);
  };
  const submitDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const formSubmitPostHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", imageUrl);
    formData.append("texte", description);
    formData.append("userId", props.user.id);

    axios({
      method: `put`,
      url: `http://localhost:3000/api/posts/${postId}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="post">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{props.post.updatedAt}</p>
      {isClicked ? (
        <form onSubmit={formSubmitPostHandler} className="createPost">
          <div>
            <label htmlFor="image">image</label>
            <input type="file" id="imageUrl" name="imageUrl" onChange={submitPostImageHandler} />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input type="texte" id="description" onChange={submitDescriptionHandler} />
          </div>
          <button type="submit">Envoyer le post</button>
        </form>
      ) : (
        <>
          <img src={props.post.imageUrl}></img>
          <p>{props.post.texte}</p>
        </>
      )}

      <p>{likeValue} like</p>
      {/* <faThumbsUp /> */}
      <button onClick={submitLikeHandler}>like</button>
      <button onClick={submitDislikeHandler}>dislike</button>
      {isAuthor || isAdmin ? <button onClick={submitDeletePostHandler}>supprimer post</button> : ""}
      {isAuthor || isAdmin ? <button onClick={toggleIsClicked}>modifier post</button> : ""}
    </div>
  );
};
export default Post;
