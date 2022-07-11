import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <ul>
      {props.comments.length > 0 &&
        props.comments.map((comment) => (
          <li>
            <Comment key={comment.id} comment={comment} token={props.token} isAdmin={props.isAdmin} />
          </li>
        ))}
      {props.comments.length === 0 && ""}
    </ul>
  );
};
export default CommentList;
