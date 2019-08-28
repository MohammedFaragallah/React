import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/aio/counter" activeClassName="is-active">
      counter
    </NavLink>
    <NavLink to="/aio/classCounter" activeClassName="is-active">
      classCounter
    </NavLink>

    <NavLink to="/aio/indecisionmead" activeClassName="is-active">
      Indecision - MEAD
    </NavLink>
    <NavLink to="/aio/Indecision" activeClassName="is-active">
      Indecision
    </NavLink>

    <NavLink to="/aio/classVtoggle" activeClassName="is-active">
      classVtoggle
    </NavLink>
    <NavLink to="/aio/vtoggle" activeClassName="is-active">
      Vtoggle
    </NavLink>
  </header>
);

export default Header;
