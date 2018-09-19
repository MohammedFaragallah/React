import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setText,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from '../../redux/actions/filters';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpensesListFilters extends Component {
  state = {
    calenderFocused: null,
  };

  onDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.dispatch(setText(e.target.value));
          }}
          value={this.props.filters.text}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            } else if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            }
          }}
          name=""
          id=""
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          // ! search what is startDateId/endDateId and what it should be
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.onDateChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });

export default connect(mapStateToProps)(ExpensesListFilters);
