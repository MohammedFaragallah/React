import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/burger/builder">Burger Builder</NavigationItem>
    <NavigationItem link="/burger/checkout">Checkout</NavigationItem>
    <NavigationItem link="/burger/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
