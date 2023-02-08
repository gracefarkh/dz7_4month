import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.get("posts").then((response) => {
      setPosts(response.data);
      setFilteredPosts(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
        ||post.body.toLowerCase().includes(searchTerm.toLowerCase())
          ||post.userId == searchTerm
      )
    );
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введите заголовок"
      />
      <ul>
        {filteredPosts.map((post) => (
          <Link to={`post/${post.id}`} key={post.id}>
            <h3>Author: {post.userId},</h3>
            <h3>Title: {post.title}</h3>
            <h3>Body: {post.body}</h3>
          </Link>
        ))}
      </ul>

    </>
  );
}

export default PostList;