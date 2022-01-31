import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage/HomePage";
import "./App.css";
import SignUp from "./components/signup/SignUp";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import LoggedIn from "./screens/loggedInPage/LoggedIn";
import CreatePost from "./screens/createPost/CreatePost";
import BlogPage from "./screens/blogPage/BlogPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loggedInUser/:id" element={<LoggedIn />} />
        <Route path="/createPost/:id" element={<CreatePost />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
