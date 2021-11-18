import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])

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
    if (!(order.find((o) => o.mainId === item.mainId))) {
      return setOrder([...order, item]);
    }
  };

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
    </main>
  )
}
