import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesListItem } from '../../Components/Expenses/ExpensesListItem';
import { expenses } from '../fixtures/expenses';

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpensesListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
