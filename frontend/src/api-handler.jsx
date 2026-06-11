const API_URL =
  "https://pierre-canet.students-laplateforme.io/wordpress/wp-json/wp/v2";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts?_embed`);
  return response.json();
};

export const fetchPost = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}?_embed`);
  return response.json();
};
