import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const { id } = useParams();
  return <SinglePost postId={id} />;
}

export default SinglePostPage;
