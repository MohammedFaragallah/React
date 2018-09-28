import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';

class Emaily extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <div />;
  }
}

export default connect(
  null,
  actions
)(Emaily);
