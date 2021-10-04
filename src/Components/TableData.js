import { Table } from 'reactstrap';
import TableItem from './TableItem';

const TableData = ({ posts, pagesVisited, postsPerPage }) => {
    return (
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
                <TableItem pagesVisited={pagesVisited} post={post} idx={idx} />
              ))
              
            }
          </tbody>
        </Table>
    )
}

export default TableData;