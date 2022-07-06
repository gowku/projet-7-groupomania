import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Comment from "./Comment";

// const Posts = () => {
//   async function getAllPosts() {
//     try {
//       const response = await axios.get("http://localhost:3000/api/posts", {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Njc3MzIwMiwiZXhwIjoxNjU2ODU5NjAyfQ.3LUdloPdGnRWCZMFEqjzWn-6IiNaMHCgcHc4w3ztJM0 `,
//         },
//       });
//       // console.log(response.data);
//       let allPosts = response.data;
//       allPosts.map((post) => {
//         console.log(post);
//         //ici j'ai chaque post
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getAllPosts();

//   return (
//     <ul>
//       <li>
//         <Post />
//       </li>
//     </ul>
//   );
// };
// export default Posts;

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NzEwMzkzMywiZXhwIjoxNjU3MTkwMzMzfQ.zxjbx0844wd6raO5d321SdRdgPTiiZyiQuJTolVYTr4 `,
        },
      })
      .then((response) => response.data)
      .then((posts) => setPosts(posts));
  }, []);
  return posts.map((post) => (
    <div>
      <Post key={post.id} post={post} />
      <p>{myBool ? <Comment toggleBool={toggleBool} /> : ""}</p>
    </div>
  ));
};

export default Posts;
