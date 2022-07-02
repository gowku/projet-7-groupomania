import Comment from "./Comment";

const Post = (props) => {
  return (
    <div className="post">
      <p>firstname</p>
      <p>lastname</p>
      <p>creer a</p>
      <img></img>
      <p>description</p>
      <p>nombre de like</p>
      <p>like</p>
      <p>dislike</p>
      <button onClick={props.toggleBool}>écrire un commentaire</button>
    </div>
  );
};
export default Post;
