import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, changePage }) => {
    return (
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
    )
}

export default Pagination;