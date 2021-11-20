import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
    .then((response) => response.json())
    .then((data) => {
      data.shop && setGoods(data.shop);
      setLoading(false);
    })
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })

      setOrder(newOrder);
    }
    setAlertName(item.displayName)
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
} ;

  const removeFromBasket = (id) => {
    setOrder(order.filter((item) => item.mainId !== id));
  };

  const incQuantity = (itemId) => {    
    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === itemId) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      } else {
        return orderItem;
      }
    })
    setOrder(newOrder);
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === itemId) {
        const newQuantity = orderItem.quantity - 1;
        return {
          ...orderItem,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return orderItem;
      }
    })
    setOrder(newOrder);
  }

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      { loading ? <Preloader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
      { isBasketShow 
        && 
        <BasketList 
          order={order} 
          handleBasketShow={handleBasketShow} 
          removeFromBasket={removeFromBasket} 
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      }
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}
