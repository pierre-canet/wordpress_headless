import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
