import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Checkout/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler';
import { fetchOrders } from '../../../../redux/actions/order';
import Spinner from '../../components/UI/Spinner/Spinner';
class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    let render = (
      <div>
        {this.props.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
    if (this.props.loading) {
      render = <Spinner />;
    }
    return render;
  }
}
const mapStateToProps = state => ({
  orders: state.orders.orders,
  loading: state.orders.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => {
      dispatch(fetchOrders());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
