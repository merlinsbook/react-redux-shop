import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import { AddShoppingCart, IndeterminateCheckBox } from 'material-ui-icons';

// internal imports
import { addItem, removeItem, setItemsQuantity, setSelectedItems, setShopItemsQuantity } from './redux/shop.actions';
import { Container, Content, Footer, Header, Row } from './components/wrapper';
import { Product, ProductImage, ProductName, ProductQuantity, ProductPrice, ProductTotal  } from './components/product';
import { Button } from './components/Button';
import { CheckoutForm } from '../../config/lib';

// declarations
const history = createHistory();

const _Container = ({title, items, removeItemsHandler, setQuantityHandler}) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Content cart>
       {
         items && items.map(item => {
           return (
            <Product cart key={item.id}>
            <Row>
              <ProductImage style={{width: 40, height: 40}} src={item.img} />
              <ProductName>{item.name}</ProductName>
              </Row>
              <Row>
                <ProductQuantity cart id={item.id} type="number" step={1} value={item.quantity || 0} onChange={setQuantityHandler} />
                <ProductPrice cart> / {item.price} {item.currency}</ProductPrice>
                <ProductTotal>{(item.price * item.quantity).toFixed(2)} {item.currency}</ProductTotal>
                <Button onClick={() => removeItemsHandler(item) }>
                  <IndeterminateCheckBox />
                </Button>
              </Row>
            </Product>
           )
         })
       }
      </Content>
      <Footer><CheckoutForm /></Footer>     
    </Container>
  );
}

export const Cart = compose(

  connect(
    state => ({
      items: state.shop.get('items').toJS(),
    }),
    dispatch => ({
      removeItem: id => dispatch(removeItem(id)),
      setItemsQuantity: (id, value) => dispatch(setItemsQuantity(id, value)),
      setSelectedItems: (id) => dispatch(setSelectedItems(id)),
      setShopItemsQuantity: (id, value) => dispatch(setShopItemsQuantity(id, value)),
    })
  ),

  withState('quantity', 'setQuantity', 0),

  withHandlers({

    setQuantityHandler: ({setItemsQuantity}) => ({target}) => {
      setItemsQuantity(target.id, parseInt(target.value));
    },
    
    removeItemsHandler: ({ removeItem, setSelectedItems, setShopItemsQuantity }) => (item) => {
      removeItem(item);
      setShopItemsQuantity(item.id, 0);
      setSelectedItems(item.id);
    }

  }),

  pure
)(_Container);