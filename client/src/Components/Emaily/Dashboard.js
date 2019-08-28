import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        Dashboard
        <Link to="/emaily/surveys/new">Add</Link>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
