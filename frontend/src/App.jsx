import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
