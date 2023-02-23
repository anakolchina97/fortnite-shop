import { GoodsItem } from "./GoodsItem";

export const GoodList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here!</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item, index) => {
        return <GoodsItem key={index} {...item} addToBasket={addToBasket} />;
      })}
    </div>
  );
};
