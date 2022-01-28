import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage/HomePage";
import LoginForm from "./components/login/LoginForm";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
