// prop type declaration
import PropTypes from 'prop-types';
const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}
import React from 'react';
import { Provider } from 'react-intl-redux';
import { Router, Route, IndexRoute, Switch, Redirect } from 'react-router';
import { compose, pure } from 'recompose';
import { ThemeProvider } from 'styled-components';
import {StripeProvider} from 'react-stripe-elements';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// internal imports
import { 
  CartView, 
  defaultTheme, 
  Main, 
  Navigation, 
  ShopView, 
} from '../config/lib';
import { MainView, STRIPE_API_KEY } from '../config/lib';

// theming
import styles from '../common/scss/index.scss';
const theme = defaultTheme();

// app view
const View = ({ history, store }) => {
  return (
    <StripeProvider apiKey={STRIPE_API_KEY}>
      <MuiThemeProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>        
            <Router history={history}>
              <MainView>
                <Switch>
                  <Route exact path="/" component={ShopView} />
                  <Route path="/dashboard" component={CartView} />
                  <Redirect exact from="/" to="home"/>
                  <Route component={() => <div>404 NOT FOUND</div>} />
                </Switch>
              </MainView>
            </Router>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StripeProvider>
  )
}

View.propTypes = {
  ...propTypes
}

export const AppView = compose(pure)(View);
