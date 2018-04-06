import { fromJS } from 'immutable';
import { ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, SET_SELECTED_ITEMS, SET_SHOP_ITEMS_QUANTITY } from './shop.actions';
import { shopItems } from './data';

const persistedState = localStorage.getItem('shopState');

let initialState = fromJS({
  items: [],
  shopItems: shopItems,
});

if (persistedState) {
  initialState = fromJS(JSON.parse(persistedState).shop);
}

export default (state = initialState, action) => {

  let items = [];

  switch (action.type) {

    // cart items >>
    case ADD_ITEM:
      items = [ 
        ...state.get('items').toJS(),
        action.payload.item
      ];
      return state.set('items', fromJS(items));

    case REMOVE_ITEM:
      items = state.get('items').toJS();
      items = items.filter(item => item.id != action.payload.item.id)
      return state.set('items', fromJS(items));

    case SET_QUANTITY:
      items = state.get('items').toJS();
      items = items.map(item => {
        if(parseInt(action.payload.id) === item.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      })
      return state.set('items', fromJS(items));

    // shop items >>
    case SET_SHOP_ITEMS_QUANTITY:
      items = state.get('shopItems').toJS();
      items = items.map(item => {
        if(parseInt(action.payload.id) === item.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      })
      return state.set('shopItems', fromJS(items));

    case SET_SELECTED_ITEMS:
    console.log(action.payload)
      items = state.get('shopItems').toJS();
      items[action.payload.id].isSelected = !(items[action.payload.id].isSelected);
      if(!items[action.payload.id].isSelected) items[action.payload.id].quantity = 0;
      return state.set('shopItems', fromJS(items));

    default:
      return state;
  }
};

