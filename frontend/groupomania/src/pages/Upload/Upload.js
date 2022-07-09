import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo.token;
  const userId = userInfo.userId;

  const [imageUrl, setImageUrl] = useState("null");
  const [description, setDescription] = useState("null");

  const submitPostImageHandler = (e) => {
    setImageUrl(e.target.files[0]);
  };
  const submitDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const formSubmitPostHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", imageUrl);
    formData.append("texte", description);
    formData.append("userId", userId);

    axios({
      method: "post",
      url: "http://localhost:3000/api/posts",
      data: formData,
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "multipart/form-data",
      },
    })
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
        <input type="file" id="imageUrl" name="imageUrl" onChange={submitPostImageHandler} />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input type="texte" id="description" onChange={submitDescriptionHandler} />
      </div>
      <button type="submit">Envoyer le post</button>
    </form>
  );
};
export default Upload;
