import Table from "react-bootstrap/Table";

function TableComponent({ rowData = [] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>USERNAME</th>
          <th>PASSWORD</th>
          <th>CITY</th>
        </tr>
      </thead>
      <tbody>
        {rowData.map((eachRow, index) => (
          <tr key={index}>
            <td>{eachRow.userName}</td>
            <td>{eachRow.password}</td>
            <td>{eachRow.city}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
