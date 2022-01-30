import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findUserById } from "../../services/apiConfig";

export default function LoggedIn() {
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await findUserById(id);
      console.log(user.data.data.user);
      setLoggedInUserData(user.data.data.user);
    };
    fetchUserData();
  }, []);

  if (!loggedInUserData.posts) {
    return "Searching";
  }

  return (
    <Layout>
      <h1>{loggedInUserData.userName}</h1>
      <h3>{loggedInUserData.email}</h3>
      <h3>{loggedInUserData.email}</h3>
      <h3>{loggedInUserData.member_since}</h3>
      {loggedInUserData.posts.length === 0 ? (
        <h3>No Posts Yet</h3>
      ) : (
        loggedInUserData.posts.map((post) => <h3>{post}</h3>)
      )}
    </Layout>
  );
}
