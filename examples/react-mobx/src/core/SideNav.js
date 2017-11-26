import React from 'react';
// import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

const SideNavComponent = () => {
  return (
    <ul className="nav nav-sidebar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/places">Places</Link>
      </li>
    </ul>
  );
};

SideNavComponent.propTypes = {};

export const SideNav = inject()(observer(SideNavComponent));