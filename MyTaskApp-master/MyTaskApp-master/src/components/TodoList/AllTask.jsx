import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function AllTask() {
  const { data } = useContext(UserContext);

  return (
    <table className="table table-responsive table-striped text-center">
      <thead>
        <tr className="table-dark">
          <th scope="col">Sr No</th>
          <th scope="col">Task</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="3" className="text-danger">
              No tasks available
            </td>
          </tr>
        ) : (
          data.map((task, index) => (
            <tr key={index}>
                             
                  <th scope="row">{index + 1}</th>               
                  <td className="w-75">{task}</td>
                  <td>
                    <button className="btn btn-danger mx-2">Update</button>
                    <button className="btn btn-warning">Delete</button>
                  </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default AllTask;
