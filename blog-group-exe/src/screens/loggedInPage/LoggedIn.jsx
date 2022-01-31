import Layout from "../../components/layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findUserById } from "../../services/apiConfig";
import classes from "./LoggedIn.module.css";

export default function LoggedIn() {
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  console.log(loggedInUserData);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await findUserById(id);
      setLoggedInUserData(user.data.data.user);
    };
    fetchUserData();
  }, []);

  if (!loggedInUserData.posts) {
    return "Searching";
  }

  const createAPostHandler = () => {
    navigate(`/createPost/${id}`);
  };

  return (
    <Layout>
      <h1>{loggedInUserData.userName}</h1>
      <h3>{loggedInUserData.email}</h3>
      <h3>{loggedInUserData.member_since}</h3>
      {loggedInUserData.posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </div>
      ))}
      <button onClick={createAPostHandler}>Create a Post!</button>
    </Layout>
  );
}
