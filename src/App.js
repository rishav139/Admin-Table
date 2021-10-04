import React, { useState,useEffect } from "react";
import './App.css';
import Header from './Components/Header.js';
import TableData from './Components/TableData.js';
import  Pagination from './Components/Pagination.js';

function App() {

  const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
      <>
        <Header />
        <TableData posts={posts} pagesVisited={pagesVisited} postsPerPage={postsPerPage} />
        <Pagination changePage={changePage} pageCount={pageCount} /> 
      </>
  );
}

export default App;
