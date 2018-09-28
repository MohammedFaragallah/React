import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <header>
        <NavLink to="/emaily/dashboard" activeClassName="is-active" exact>
          Dashboard
        </NavLink>
        <a href="/auth/google">Google Here</a>
        <a href="/api/logout">Log out</a>
        {this.renderContent()}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(EmailyHeader);
