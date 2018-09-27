import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummuray.module.css';

const checkoutSummuray = props => (
  <div className={classes.CheckoutSummuray}>
    <h1>we hope it taste well</h1>
    <div
      style={{
        width: '100%',
        margin: 'auto',
      }}
    >
      <Burger ingredients={props.ingredients} />
    </div>
    <Button clicked={props.checkoutCancelled} btnType="Danger">
      Cancel
    </Button>
    <Button clicked={props.checkoutContonued} btnType="Success">
      Continue
    </Button>
  </div>
);

export default checkoutSummuray;
