import React, { Component } from 'react';
import CheckoutSummuray from '../../components/Order/CheckoutSummuray/CheckoutSummuray';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import Layout from '../../components/Layout/Layout';
class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutContonued = () => {
    this.props.history.replace('/burger/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <Layout>
          <CheckoutSummuray
            checkoutCancelled={this.checkoutCancelled}
            checkoutContonued={this.checkoutContonued}
            ingredients={this.state.ingredients}
          />
          <Route
            path="/burger/checkout/contact-data"
            component={props => {
              return (
                <ContactData
                  ingredients={this.state.ingredients}
                  price={this.state.totalPrice}
                  {...props}
                />
              );
            }}
          />
        </Layout>
      </div>
    );
  }
}

export default Checkout;
