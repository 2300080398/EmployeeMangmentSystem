// src/Components/EmployeeList.jsx
import React from "react";
import './EmployeeList.css';
const EmployeeList = () => {
  return (
    <div className="employee-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>alice@example.com</td>
            <td>Developer</td>
            <td><a href="#">Edit</a> <button>Delete</button></td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>bob@example.com</td>
            <td>Designer</td>
            <td><a href="#">Edit</a> <button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
