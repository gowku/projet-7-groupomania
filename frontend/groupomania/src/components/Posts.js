import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Comment from "./Comment";

const Posts = (props) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo.token;
  const userId = userInfo.userId;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => response.data)
      .then((posts) => setPosts(posts));
  }, []);
  return posts.map((post) => (
    <div>
      <Post key={post.id} post={post} />
      <Comment />
    </div>
  ));
};

export default Posts;
