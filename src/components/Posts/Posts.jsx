import React, { useState, useEffect } from "react";
import { fetchPosts } from "../../api-handler";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
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
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>ID : {post.id}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
            className="post-content"
          />
          <a href={`./${post.id}`} className="see-more-link">
            Lire l'article
          </a>
        </article>
      ))}
    </div>
  );
}

export default Posts;
