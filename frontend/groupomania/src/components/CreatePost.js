import axios from "axios";
import { useState } from "react";

const CreatePost = () => {
  const [postInput, setpostInput] = useState({
    enteredImage: "",
    enteredDescription: "",
  });

  const submitPostImageHandler = (e) => {
    setpostInput({ ...postInput, enteredImage: e.target[0] });
  };
  const submitDescriptionHandler = (e) => {
    setpostInput({ ...postInput, enteredDescription: e.target.value });
  };

  const formSubmitPostHandler = (e) => {
    e.preventDefault();
    // console.log(e.target[0]);

    axios
      .post(
        "http://localhost:3000/api/posts",
        {
          userId: 1,
          texte: postInput.enteredDescription,
          file: postInput.enteredImage,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Njc3MzIwMiwiZXhwIjoxNjU2ODU5NjAyfQ.3LUdloPdGnRWCZMFEqjzWn-6IiNaMHCgcHc4w3ztJM0 `,
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={formSubmitPostHandler} className="createPost">
      <div>
        <label htmlFor="image">image</label>
        <input type="file" id="image" onChange={submitPostImageHandler} />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input type="description" id="description" onChange={submitDescriptionHandler} />
      </div>
      <button type="submit">Envoyer le post</button>
    </form>
  );
};
export default CreatePost;
