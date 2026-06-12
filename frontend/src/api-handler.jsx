const API_URL =
  "https://pierre-canet.students-laplateforme.io/wordpress/wp-json/wp/v2";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchSinglePost = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
};
