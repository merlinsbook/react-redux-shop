// prop type declaration
import PropTypes from 'prop-types';
const propTypes = {
  children: PropTypes.object.isRequired,
}
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, pure } from 'recompose';

// internal imports
import { Header, Layout, Content, Navigation } from '../config/lib';

// main view
const View = ({ children }) => {

  return (
    <Layout >
      
      <Header>SHOP TEMPLATE</Header>
  
      <Navigation />

      <Content>
        {children}
      </Content>

    </Layout>
  )
}

View.propTypes = {
  ...propTypes
}

export const MainView = compose(withRouter, pure)(View);
