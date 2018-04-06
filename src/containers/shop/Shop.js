import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, pure, withState, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';
import { AddShoppingCart, IndeterminateCheckBox } from 'material-ui-icons';

// internal imports
import { addItem, removeItem, setSelectedItems, setShopItemsQuantity } from './redux/shop.actions';
import { Container, Content, Footer, Header, Row } from './components/wrapper';
import { Product, ProductImage, ProductName, ProductQuantity, ProductPrice  } from './components/product';
import { Button } from './components/Button';

const _Container = ({
  addItemHandler, 
  shopItems, 
  removeItemsHandler,
  setQuantityHandler, 
  setSelectedItemsHandler, 
  storageItems, 
  title,
}) => {

  return (
    <Container>
      <Header>{title}</Header>
      <Content>
       {
         shopItems && shopItems.map(item => {
           return (
            <Product shop key={item.id}>
              <ProductImage src={item.img} />
              <ProductName>{item.name}</ProductName>
              <Row>
                <ProductPrice shop>{item.price} {item.currency}</ProductPrice>
                <Row>
                  <ProductQuantity shop min={0} id={item.id} type="number" step={1} value={item.quantity} onChange={setQuantityHandler} />
                  <Button 
                    disabled={(item.quantity === 0)}
                    onClick={() => {
                        if(!item.isSelected) {
                          addItemHandler(item);
                        } else {
                          removeItemsHandler(item);
                        }
                        setSelectedItemsHandler(item.id);
                      }
                    }
                  >
                    { 
                      !item.isSelected ?
                      <AddShoppingCart />
                      :
                      <IndeterminateCheckBox />
                    }
                  </Button>
                </Row>
              </Row>
            </Product>
           )
         })
       }
      </Content>
      <Footer> 
      
      </Footer>     
    </Container>
  );
}

export const Shop = compose(

  connect(
    state => ({
      shopItems: state.shop.get('shopItems').toJS(),
      storageItems: state.shop.get('items').toJS(),
    }),
    dispatch => ({
      addItem: item => dispatch(addItem(item)),
      removeItem: item => dispatch(removeItem(item)),
      setSelectedItems: (id) => dispatch(setSelectedItems(id)),
      setShopItemsQuantity: (id, value) => dispatch(setShopItemsQuantity(id, value)),
    })
  ),

  withHandlers({

    setQuantityHandler: ({ setShopItemsQuantity }) => ({target}) => {     
      setShopItemsQuantity(target.id, parseInt(target.value));
    },

    setSelectedItemsHandler: ({ setSelectedItems }) => (id) => {
      setSelectedItems(id);
    },

    addItemHandler: ({ addItem }) => (item) => {
      addItem(item);
    },

    removeItemsHandler: ({ removeItem, setShopItemsQuantity }) => (item) => {
      removeItem(item);
    }
  }),
  
  pure
)(_Container);