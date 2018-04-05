import React from 'react';
import { compose, pure } from 'recompose';
import styled, { css } from 'styled-components';

// internal imports
import { Nav, NavItem } from './components/navigation';
import { StyledLink } from './components/StyledLink';

const _Container = ({ children }) => {
  return (
    <Nav>
      <NavItem active><StyledLink to="/">Shop</StyledLink></NavItem>
      <NavItem><StyledLink to="/dashboard">Cart</StyledLink></NavItem>
      <NavItem><StyledLink to="/contact">Checkout</StyledLink></NavItem>
    </Nav>
  )
}

export const Navigation = compose (pure)(_Container);
