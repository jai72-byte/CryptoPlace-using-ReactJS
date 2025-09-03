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
    <div className=" bg-[linear-gradient(#f0f6ff,#e8f1ff,#edf0ff)] dark:bg-[linear-gradient(#0b004e,#1d152f,#002834)] text-black dark:text-white">
        <div className="blog-container">
          <h2 className="blog-title">Latest Blog Posts and References</h2>
          {posts.map((post) => (
            <div key={post.id} className="blog-card bg-gray-300 dark:bg-[rgba(255,255,255,0.05)]">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.url} target="_blank" rel="noreferrer">
                Read More →
              </a>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Blog;
