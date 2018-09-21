import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  order = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Mohammed Faragallah',
        address: {
          street: 'street',
          zipcode: 21555,
          country: 'Egypt',
        },
        email: 'test@test.com',
      },
      deleveryMethod: 'fast',
    };
    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        this.props.history.push('/burger/builder');
      })
      .catch(error => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="Postal Code" />
        <Button clicked={this.order} btnType="Success">
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
