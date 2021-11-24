import { useContext } from 'react';
import { ShopContext } from '../context';

import { GoodsItem } from './GoodsItem';

export const GoodList = () => {
  const {goods = []} = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here!</h3>
  }

  return (
    <div className="goods">
      {
        goods.map((item) => {
         return <GoodsItem key={item.mainId} {...item}  />
        })
      }      
    </div>
  )
}
