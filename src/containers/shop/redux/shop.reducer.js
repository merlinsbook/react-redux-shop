import { fromJS } from 'immutable';
import { ADD_ITEM, REMOVE_ITEM, SET_QUANTITY } from './shop.actions';

const persistedState = localStorage.getItem('shopState');

let initialState = fromJS({
  items: [],
});

if (persistedState) {
  initialState = fromJS(JSON.parse(persistedState).shop);
}

export default (state = initialState, action) => {

  let items = [];

  switch (action.type) {
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
          item.quantity = parseInt(action.payload.quantity);
        }
        return item;
      })
      return state.set('items', fromJS(items));

    default:
      return state;
  }
};
