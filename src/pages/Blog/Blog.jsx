import { useEffect, useState } from "react";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=cryptonews&per_page=3")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Blog Posts and References</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a href={post.url} target="_blank" rel="noreferrer">
            Read More →
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
