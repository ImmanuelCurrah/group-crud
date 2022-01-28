import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage/HomePage";

import "./App.css";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
