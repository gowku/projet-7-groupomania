import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const Posts = (props) => {
  // console.log(props);

  const token = props.token;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => response.data)
      .then((posts) => setPosts(posts));
  }, []);
  // console.log(posts);

  return (
    <ul>
      {posts.length > 0 &&
        posts.map((post) => (
          <li>
            <Post key={post.id} post={post} user={props.user} token={token} />

            <CommentList comments={post.comments} token={token} />

            <AddComment token={token} postId={post.id} user={props.user} />
          </li>
        ))}
      {posts.length === 0 && <p>Il n'y a pas de posts</p>}
    </ul>
  );
};

export default Posts;
