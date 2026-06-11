import { useState } from "react";
import "./App.css";

function App() {
  fetch("/wp-json/wp/v2/posts")
    .then((response) => response.json())
    .then((posts) => console.log(posts));
  return <></>;
}

export default App;
