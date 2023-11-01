import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

function MyTask() {
  const [input, setInput] = useState("");
  const [storeValue, setStoreValue] = useState([]);

  //Store the Data in the useContext
  const { setData } = useContext(UserContext);
  
  const handleAddTask = () => {
    if (input.trim() !== "") {
      setStoreValue((data) => [...data, input]); // Update storeValue
      setData([...storeValue, input]); // Update the context data
      setInput("");
    }
  };

  console.log(storeValue);
  return (
    <>
      <div id="newMyTask">
        <div className="container">
          <div id="mytask">
            <h3 className="text-center pb-2">My Task</h3>
            <div className="mb-3 d-flex justify-content-center">
              <input
                type="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                placeholder="Enter your task"
                className="form-control w-75"
              />
              <button onClick={handleAddTask} className="btn btn-success mx-3">
                Add task
              </button>
            </div>

            <div id="buttonSection" className="d-flex justify-content-center">
              <Link to="alltask" className="btn btn-danger">
                All Task
              </Link>
              <Link to="pendingtask" className="btn btn-success mx-3">
                Pending Task
              </Link>
              <Link to="completedtask" className="btn btn-warning">
                Completed Task
              </Link>
            </div>
            <div className="showData">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTask;
