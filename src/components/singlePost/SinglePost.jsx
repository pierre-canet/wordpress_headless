import React, { useState, useEffect } from "react";
import { fetchSinglePost } from "../../api-handler";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchSinglePost(id);
        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }
  if (!post) {
    return <p>Article introuvable</p>;
  }
  return (
    <div className="posts-container">
      <article key={post.id}>
        <h2>{post.title.rendered}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
          className="post-content"
        />
      </article>
    </div>
  );
};

export default SinglePost;
