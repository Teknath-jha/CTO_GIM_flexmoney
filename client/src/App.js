import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
