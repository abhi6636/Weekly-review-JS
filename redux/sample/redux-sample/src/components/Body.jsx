import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="container">
        <button className="btn btn-success addUser">Add New User</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Monkey D Luffy</td>
              <td>strawhat</td>
              <td></td>
              <td>
                <button className="btn btn-primary mx-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>Roronova Zoro</td>
              <td>piratehunter</td>
              <td></td>
              <td>
                <button className="btn btn-primary mx-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Body;
