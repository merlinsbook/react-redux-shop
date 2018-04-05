import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import { AddShoppingCart, IndeterminateCheckBox } from 'material-ui-icons';

// internal imports
import { addItem, setItemsQuantity, removeItem } from './redux/shop.actions';
import { CheckoutForm } from '../../config/lib';
import imgCabbage from '../../assets/cabbage.jpg';
import imgCarrots from '../../assets/carrots.jpg';
import imgCucumbers from '../../assets/cucumbers.jpg';
import { Container, Content, Footer, Header, Row } from './components/wrapper';
import { Product, ProductImage, ProductName, ProductQuantity, ProductPrice, ProductTotal  } from './components/product';
import { Button } from './components/Button';

// declarations
const images = [imgCabbage, imgCarrots, imgCucumbers, imgCabbage];
const history = createHistory();

const _Container = ({items, removeItemsHandler, setQuantityHandler}) => {
  return (
    <Container>
      <Header>Selected Articles</Header>
      <Content cart>
       {
         items && items.map(item => {
           return (
            <Product cart key={item.id}>
            <Row>
              <ProductImage style={{width: 40, height: 40}} src={images[item.id]} />
              <ProductName>{item.name}</ProductName>
              </Row>
              <Row>
                <ProductQuantity cart id={item.id} type="number" step={1} value={item.quantity || 0} onChange={setQuantityHandler} />
                <ProductPrice cart> / {item.price} {item.currency}</ProductPrice>
                <ProductTotal>{(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)} {item.currency}</ProductTotal>
                <Button onClick={() => {
                    removeItemsHandler(item)
                  }}>
                   <IndeterminateCheckBox />
                </Button>
              </Row>
            </Product>
           )
         })
       }
      </Content>
      <Footer> 
      
      <CheckoutForm />
      </Footer>     
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
    })
  ),

  withState('quantity', 'setQuantity', 0),

  withHandlers({

    setQuantityHandler: ({setItemsQuantity}) => ({target}) => {
      console.log(target.id, target.value)
      setItemsQuantity(target.id, target.value);
    },
    
    removeItemsHandler: ({ removeItem }) => (item) => {
      removeItem(item);
    }

  }),

  pure
)(_Container);