import { useState, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SinglePostPage from "./pages/singlePost/Single_post_page";
import PostPage from "./pages/posts/Post_page";
//import { useParams } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename="wordpress_headless">
      <Header />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/:id" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
