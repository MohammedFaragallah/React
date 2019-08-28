import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from '../Emaily/Payments';
class EmailyHeader extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="payments">
            <Payments />
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>,
          <li key="credits">{this.props.auth.credits}</li>,
        ];
    }
  }

  render() {
    return (
      <header>
        <NavLink to="/emaily/dashboard" activeClassName="is-active" exact>
          Dashboard
        </NavLink>
        <a href="/auth/google">Google Here</a>
        {this.renderContent()}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(EmailyHeader);
