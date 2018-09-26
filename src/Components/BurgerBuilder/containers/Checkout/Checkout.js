import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
    let summary = <Redirect to="/burger/builder" />;
    if (this.props.ings) {
      const purchaseRedirect = this.props.purchased ? (
        <Redirect to="/burger/builder" />
      ) : null;
      summary = (
        <div>
          {purchaseRedirect}
          <CheckoutSummuray
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContonued={this.checkoutContinuedHandler}
            ingredients={this.props.ings}
          />
          <Route path="/burger/checkout/contact-data" component={ContactData} />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = state => {
  return {
    ings: state.burger.ingredients,
    purchased: state.orders.purchased,
    price: state.burger.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);
