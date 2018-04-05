export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_QUANTITY = 'SET_QUANTITY';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    item
  }
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: {
    item
  }
});

export const setItemsQuantity = (id, value) => ({
  type: SET_QUANTITY,
  payload: {
    id,
    quantity: value
  }
});
