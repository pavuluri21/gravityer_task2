// src/components/Filter.js
import React from 'react';
import './Filter.css'; // Import the CSS file

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-container">
      <button className="filter-btn all" onClick={() => setFilter('all')}>All</button>
      <button className="filter-btn completed" onClick={() => setFilter('completed')}>Completed</button>
      <button className="filter-btn pending" onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default Filter;
