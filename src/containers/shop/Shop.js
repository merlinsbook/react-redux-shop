import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';

import { addItem, removeItem, checkout } from './redux/shop.actions';

import createHistory from 'history/createBrowserHistory';
import { AddShoppingCart, IndeterminateCheckBox } from 'material-ui-icons';

// internal imports
import { Container, Content, Footer, Header, Row } from './components/wrapper';
import { Product, ProductImage, ProductName, ProductQuantity, ProductPrice  } from './components/product';
import { Button } from './components/Button';

// declarations
const history = createHistory();

// declarations
// @todo: temp. workaround
let init = true;

const _Container = ({
  addItemHandler, 
  images, 
  items, 
  removeItemsHandler,
  setQuantityHandler, 
  setSelectedItemsHandler, 
  storageItems, 
  title,
}) => {

  if(init && storageItems) {
    for(let i = 0; i < items.length; i++) {
      for(let j = 0; j < storageItems.length; j++) {
        if(items[i].id === storageItems[j].id) {
          items[i].isSelected = storageItems[j].isSelected;
          items[i].quantity = storageItems[j].quantity;
        }
      }
    }
    init = false;
  }
  
  return (
    <Container>
      <Header>{title}</Header>
      <Content>
       {
         items && items.map(item => {
           return (
            <Product shop key={item.id}>
              <ProductImage src={item.img} />
              <ProductName>{item.name}</ProductName>
              <Row>
                <ProductPrice shop>{item.price} {item.currency}</ProductPrice>
                {
                  item.isSelected === false ?
                  <Row>
                    <ProductQuantity shop min={0} id={item.id} type="number" step={1} value={item.quantity} onChange={setQuantityHandler} />
                    <Button onClick={() => {
                        setSelectedItemsHandler(item.id);
                        addItemHandler(item);
                      }
                    }>
                      <AddShoppingCart />
                    </Button>
                  </Row>
                  :
                  <Row>
                    <ProductQuantity shop min={0} id={item.id} type="number" step={1} value={item.quantity} onChange={setQuantityHandler}/>
                    <Button onClick={() => {
                        removeItemsHandler(item);
                        setSelectedItemsHandler(item.id);
                      }
                    }>
                    <IndeterminateCheckBox />
                    </Button>
                  </Row>                  
                }
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
      storageItems: state.shop.get('items').toJS(),
    }),
    dispatch => ({
      addItem: item => dispatch(addItem(item)),
      removeItem: item => dispatch(removeItem(item)),
    })
  ),

  withState('items', 'setSelectedItems', ({ itemssource }) => itemssource),
  withState('quantity', 'setQuantity', 0),

  withHandlers({

    setQuantityHandler: ({ items, setQuantity }) => ({target}) => {     
      items[target.id].quantity = parseInt(target.value);
      setQuantity(items = [...items]);
    },

    setSelectedItemsHandler: ({ items, setSelectedItems }) => (id) => {
      items[id].isSelected = !(items[id].isSelected);
      if(!items[id].isSelected) items[id].quantity = 0;
      setSelectedItems(items = [...items]);
    },

    addItemHandler: ({ addItem }) => (item) => {
      addItem(item);
    },

    removeItemsHandler: ({ removeItem }) => (item) => {
      removeItem(item);
    }
  }),
  
  pure
)(_Container);