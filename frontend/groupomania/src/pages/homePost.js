import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
const userId = userInfo.userId;
const token = userInfo.token;

const Home = () => {
  let params = useParams();
  params = userInfo.userId;
  // console.log(params);
  return (
    <div>
      <Nav />
      <CreatePost />
      <div>
        <Posts />
      </div>
    </div>
  );
};
export default Home;
