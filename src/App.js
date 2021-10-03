import React, { useState,useEffect } from "react";
import { Table } from 'reactstrap';
import ReactPaginate from "react-paginate";
import './App.css';

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
        <h1> Admin Table </h1>
        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.slice(pagesVisited, pagesVisited + postsPerPage).map((post, idx) => (
                <tr>
                  <th>{pagesVisited+idx+1}</th>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                  <td>{post.role}</td>
                </tr>
              ))
              
            }
          </tbody>
        </Table>
        
        <ReactPaginate
          previousLabel={" < "}
          nextLabel={" > "}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        
      </>
  );
}

export default App;
