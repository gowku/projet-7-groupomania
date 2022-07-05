import axios from "axios";
import { useState } from "react";
// import FormData from "form-data";

const CreatePost = () => {
  // const [postInput, setpostInput] = useState({
  //   enteredImage: "",
  //   enteredDescription: "",
  // });
  const [imageUrl, setImageUrl] = useState("null");
  const [description, setDescription] = useState("null");

  const submitPostImageHandler = (e) => {
    console.log("ici");
    // console.log(e.target);
    setImageUrl(e.target[0].files[0]);
  };
  const submitDescriptionHandler = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };

  const formSubmitPostHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].files[0]);
    let formData = new FormData();

    formData.append("file", imageUrl);
    formData.append("description", description);
    console.log(formData);

    axios
      .post(
        "http://localhost:3000/api/posts",
        // {
        //   userId: 1,
        //   texte: postInput.enteredDescription,
        //   file: postInput.enteredImage,
        // },
        { formData },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NzAxNzI0OSwiZXhwIjoxNjU3MTAzNjQ5fQ.CQQYbJiI7Ukd3HECOHex7ddu8LSrkd1MdDD8ShQMuKQ `,
            // accept: "application/json",
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
        <input type="file" id="imageUrl" name="imageUrl" onClick={submitPostImageHandler} />
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
