import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
const userId = userInfo.userId;
const token = userInfo.token;
// console.log(userInfo.token);

async function getUserInfo() {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/${userId}`, {
      headers: { Authorization: `Bearer ${token} ` },
    });
    const user = {
      id: response.data.id,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      birthDate: response.data.birthDate,
      profilPic: response.data.profilPic,
      isAdmin: response.data.isAdmin,
    };
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
getUserInfo();

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
