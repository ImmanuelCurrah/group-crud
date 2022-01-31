import { useState, useEffect } from "react";
import { existingUsersHandler } from "../../services/apiConfig";

import Footer from "../../UI/footer/Footer";
import LoggedInNavBar from "../../UI/loggedInNavBar/LoggedInNavBar";

import classes from "./BlogPage.module.css";

export default function BlogPage() {
  const [userPosts, setUserPosts] = useState();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    const fetchUserData = async () => {
      const users = await existingUsersHandler(token);
      console.log(users.data.data);
      setUserPosts(users.data.data);
    };
    fetchUserData();
  }, []);

  if (!userPosts) {
    return "Loading";
  }

  return (
    <div className={classes.blogs}>
      <LoggedInNavBar />
      {userPosts.map((posts) => {
        return posts.posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{posts.userName}</h2>
              <h3>{post.title}</h3>
              <h4>{post.body}</h4>
            </div>
          );
        });
      })}
      <Footer />
    </div>
  );
}

