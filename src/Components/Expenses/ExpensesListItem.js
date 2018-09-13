import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpensesListItem = ({ id, description, amount, createdAt }) => (
  <div className="item">
    <Link to={`/expenses/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')} -{' '}
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpensesListItem;
