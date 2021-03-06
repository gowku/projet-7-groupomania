import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../../components/UserInfo";

const Profile = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo.userId;
  const token = userInfo.token;
  // console.log(userInfo.token);

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
      <UserInfo key={user.id} user={user} token={token} />
    </div>
  );
};
export default Profile;
