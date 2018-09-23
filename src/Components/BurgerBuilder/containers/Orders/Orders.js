import React, { Component } from 'react';
import Order from '../Checkout/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler';
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount = () => {
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let Key in res.data) {
          fetchedOrders.push({
            ...res.data[Key],
            id: Key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
