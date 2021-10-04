const TableItem = ({ post, pagesVisited, idx }) => {
    return (
        <tr>
            <th>{pagesVisited+idx+1}</th>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.role}</td>
        </tr>
    )
}

export default TableItem;