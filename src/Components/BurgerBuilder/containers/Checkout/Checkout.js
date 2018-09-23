import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CheckoutSummuray from '../../components/Order/CheckoutSummuray/CheckoutSummuray';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/burger/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummuray
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContonued={this.checkoutContinuedHandler}
          ingredients={this.props.ings}
        />
        <Route path="/burger/checkout/contact-data" component={ContactData} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.burger.ingredients,
    price: state.burger.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
