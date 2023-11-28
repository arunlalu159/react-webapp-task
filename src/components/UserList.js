import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Userlist.css';

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [employeeList] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Mathews' },
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>
      <Link to="/dashboard">
        <i className="bi bi-house-door"></i>
      </Link>
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search by employee name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
