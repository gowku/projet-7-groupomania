import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Posts from "../../components/Posts";

const Home = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
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
          <Posts />
        </>
      ) : (
        <>
          <h1>Bienvenue sur GROUPOMANIA</h1>
        </>
      )}
    </>
  );
  // return (
  //   <div>
  //     <Posts />
  //   </div>
  // );
};

export default Home;
