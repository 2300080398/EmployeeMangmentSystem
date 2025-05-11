// src/Components/AddEmployee.jsx
import React from "react";
import "./AddEmployee.css";


const AddEmployee = () => {
  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form className="employee-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Job Title" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
