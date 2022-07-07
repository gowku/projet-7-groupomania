import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../../components/Posts";

const Home = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo.userId;
  const token = userInfo.token;
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${userId}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);

  // const [loggedIn, setLoggedIn] = useState(true);

  // console.log(loggedIn);

  // useEffect(() => {
  //   if (!localStorage.getItem("loggedIn")) {
  //     localStorage.setItem("loggedIn", false);
  //   }
  // }, []);

  return (
    <>
      {loggedIn ? (
        <>
          <Posts user={user} token={token} />
        </>
      ) : (
        <>
          <h1>Bienvenue sur GROUPOMANIA</h1>
        </>
      )}
    </>
  );

  // return <Posts />;
};

export default Home;
