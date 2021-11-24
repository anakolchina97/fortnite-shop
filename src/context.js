import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }

  value.addToBasket = (item) => {
    dispatch( {type: 'ADD_TO_BASKET', payload: item} )
  }

  value.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'})
  }

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { mainId: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { mainId: itemId } });
  };

  return <ShopContext.Provider value={value}>
  { children }
  </ShopContext.Provider>
}