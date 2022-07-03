import axios from "axios";
import { useState } from "react";
// import FormData from "form-data";

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
    console.log(e.target[0].files[0]);
    // let formData = new FormData();

    // formData.append(...postInput);

    axios
      .post(
        "http://localhost:3000/api/posts",
        {
          userId: 1,
          texte: postInput.enteredDescription,
          file: postInput.enteredImage,
        },
        // { formData },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Njg0NTIyMiwiZXhwIjoxNjU2OTMxNjIyfQ.Kbm3LEwF11bRN0siPNs9oqvBtGg8wNmsS-J8ZYc_eis `,
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
    <form onSubmit={formSubmitPostHandler} className="createPost" encType="multipart/form-data">
      <div>
        <label htmlFor="file">image</label>
        <input type="file" id="file" onChange={submitPostImageHandler} />
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
