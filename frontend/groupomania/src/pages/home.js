import { useParams } from "react-router-dom";
import Nav from "../components/nav";
import Posts from "../components/Posts";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));

const Home = () => {
  let params = useParams();
  params = userInfo.userId;
  console.log(params);
  return (
    <div>
      <Nav />
      <Posts />
    </div>
  );
};
export default Home;
