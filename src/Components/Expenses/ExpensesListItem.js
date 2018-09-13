import React from 'react';
import { Link } from 'react-router-dom';

export const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <div className="item">
    <Link to={`/expenses/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpensesListItem;
