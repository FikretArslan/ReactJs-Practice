import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "./components4/Pagination";
import Posts from "./components4/Posts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  /* Get current posts */
  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

  /*change page */
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />

      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
