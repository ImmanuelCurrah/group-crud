import { useState } from "react";
import { createPost } from "../../services/apiConfig";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

export default function PostForm() {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const post = await createPost(postData, id);
      navigate(`/loggedInUser/${id}`);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  const changePostDataHandler = (e) => {
    const { id, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <br />
        <input
          type="text"
          id="title"
          value={postData.title}
          placeholder="title"
          onChange={changePostDataHandler}
        />
        <br />
        <label>Body</label>
        <br />
        <input
          type="text"
          id="body"
          value={postData.body}
          placeholder="body"
          onChange={changePostDataHandler}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}