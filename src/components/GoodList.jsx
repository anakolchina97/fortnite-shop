import { GoodsItem } from './GoodsItem';

export const GoodList = (props) => {
  const {goods = [], addToBasket} = props;

  if (!goods.length) {
    return <h3>Nothing here!</h3>
  }

  return (
    <div className="goods">
      {
        goods.map((item) => {
         return <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
        })
      }      
    </div>
  )
}
