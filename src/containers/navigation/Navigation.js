import React from 'react';
import { compose, pure } from 'recompose';
import styled, { css } from 'styled-components';

// internal imports
import { Nav, NavItem } from './components/navigation';
import { StyledLink } from './components/StyledLink';

const _Container = ({ children }) => {
  return (
    <Nav>
      <StyledLink to="/">Shop</StyledLink>
      <StyledLink to="/dashboard">Cart</StyledLink>
      <StyledLink to="/contact">Checkout</StyledLink>
    </Nav>
  )
}

export const Navigation = compose (pure)(_Container);
