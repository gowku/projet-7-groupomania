import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "../../components/Posts";

const Home = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo.userId;
  const token = userInfo.token;
  console.log(token);

  let params = useParams();
  params = userInfo.userId;

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  //       return(
  //         {loggedIn ? (
  //             <>
  // <h1>Bienvenue sur GROUPOMANIA</h1>
  //             </>
  //         ):(
  //             <>
  //             <Posts/>
  //             </>
  //         )}
  //       )
  return (
    <div>
      <Posts />
    </div>
  );
};

export default Home;
