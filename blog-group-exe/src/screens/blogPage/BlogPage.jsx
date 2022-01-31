import { useState, useEffect } from "react";
import { existingUsersHandler } from "../../services/apiConfig";
import BlogPagecss from "./BlogPage.module.css";


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
    <div className={BlogPagecss.container}>
      <div >
        {userPosts.map((posts) => {
          return posts.posts.map((post) => {
            return (
              <div key={post._id} >
                <h2>{posts.userName}</h2>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
