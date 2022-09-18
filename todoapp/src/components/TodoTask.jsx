import React from "react";
import Table from "react-bootstrap/Table";

const TodoTask = () => {
  return (
    <div className="task">
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Categories</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="content">
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TodoTask;
