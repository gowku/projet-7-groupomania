import axios from "axios";
import Post from "./Post";

const Posts = () => {
  async function getAllPosts() {
    try {
      const response = await axios.get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Njc3MzIwMiwiZXhwIjoxNjU2ODU5NjAyfQ.3LUdloPdGnRWCZMFEqjzWn-6IiNaMHCgcHc4w3ztJM0 `,
        },
      });
      // console.log(response.data);
      let allPosts = response.data;
      allPosts.map((post) => {
        console.log(post);
        //ici j'ai chaque post
      });
    } catch (error) {
      console.error(error);
    }
  }
  getAllPosts();

  return (
    <ul>
      <li>
        <Post />
      </li>
    </ul>
  );
};
export default Posts;
