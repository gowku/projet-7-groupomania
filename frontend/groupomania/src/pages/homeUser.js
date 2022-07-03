import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
const userId = userInfo.userId;
const token = userInfo.token;
// console.log(userInfo.token);

// async function getUserInfo() {
//   try {
//     const response = await axios.get(`http://localhost:3000/api/auth/${userId}`, {
//       headers: { Authorization: `Bearer ${token} ` },
//     });
//     const user = {
//       id: response.data.id,
//       firstName: response.data.firstName,
//       lastName: response.data.lastName,
//       birthDate: response.data.birthDate,
//       profilPic: response.data.profilPic,
//       isAdmin: response.data.isAdmin,
//     };
//     console.log(user);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUserInfo();

// const Home = () => {
//   let params = useParams();
//   params = userInfo.userId;
//   // console.log(params);
//   return (
//     <div>
//       <Nav />
//       <UserInfo />
//     </div>
//   );
// };

const Home = () => {
  const [user, setUser] = useState([]);
  let params = useParams();
  params = userInfo.userId;
  // console.log(params);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/${userId}`, {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => setUser(response.data));
  }, []);

  return (
    <div>
      <Nav />
      <UserInfo key={user.id} user={user} />
    </div>
  );
};

export default Home;
