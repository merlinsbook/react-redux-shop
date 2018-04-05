import React from 'react';
import { connect } from 'react-redux';
import { compose, pure, withState, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';

import { addItem, removeItem, checkout } from './redux/shop.actions';

import createHistory from 'history/createBrowserHistory';
import { AddShoppingCart, IndeterminateCheckBox } from 'material-ui-icons';

// internal imports
//>> images
import imgCabbage from '../../assets/cabbage.jpg';
import imgCarrots from '../../assets/carrots.jpg';
import imgCucumbers from '../../assets/cucumbers.jpg';
//>> components
import { Container, Content, Footer, Header, Row } from './components/wrapper';
import { Product, ProductImage, ProductName, ProductQuantity, ProductPrice  } from './components/product';
import { Button } from './components/Button';

// declarations
const images = [imgCabbage, imgCarrots, imgCucumbers];
const history = createHistory();

// dummy list -> should be retrieved from a database
const itemsList = [
  {
    id: 0,
    name: 'Cabbages',
    isSelected: false,
    price: 2.99,
    currency: '€',
    quantity: 0
  },
  {
    id: 1,
    name: 'Carottes',
    isSelected: false,
    price: 1.99,
    currency: '€',
    quantity: 0
  },
  {
    id: 2,
    name: 'Cucumbers',
    isSelected: false,
    price: 0.99,
    currency: '€',
    quantity: 0
  }
];

// declarations
// @todo: temp. workaround
let init = true;

const _Container = ({items, storageItems, setSelectedItemsHandler, setQuantityHandler, addItemHandler, removeItemsHandler}) => {

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
      <Header>Vegetables</Header>
      <Content>
       {
         items && items.map(item => {
           return (
            <Product shop key={item.id}>
              <ProductImage src={images[item.id]} />
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

  withState('items', 'setSelectedItems', itemsList),
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