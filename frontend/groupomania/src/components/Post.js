import { useState } from "react";
// import Comment from "./Comment";

const Post = (props) => {
  // console.log(props.post.texte);

  // const [myBool, setmyBool] = useState(true);

  // function toggleBool() {
  //   setmyBool(!myBool);
  // }

  return (
    <div className="post">
      <p>{props.post.firstName}</p>
      <p>{props.post.lastName}</p>
      <p>{props.post.updatedAt}</p>
      <img src={props.post.imageUrl}></img>
      <p>{props.post.texte}</p>
      <p>{props.post.like}</p>
      <p>like</p>
      <p>dislike</p>
      <button onClick={props.toggleBool}>écrire un commentaire</button>
      {/* <p>{myBool ? <Comment toggleBool={toggleBool} /> : ""}</p> */}
    </div>
  );
};
export default Post;
