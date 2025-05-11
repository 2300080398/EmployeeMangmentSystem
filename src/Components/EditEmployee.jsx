// src/Components/EditEmployee.jsx
import { useEffect, useState } from 'react';
import { getEmployeeById, updateEmployee } from '../Service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ name: '', email: '', jobTitle: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeById(id).then(setEmployee);
  }, [id]);

  const handleChange = e => setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await updateEmployee(id, employee);
    navigate('/employees');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Edit Employee</h2>
      <input name="name" value={employee.name} onChange={handleChange} required />
      <input name="email" value={employee.email} onChange={handleChange} required />
      <input name="jobTitle" value={employee.jobTitle} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;
