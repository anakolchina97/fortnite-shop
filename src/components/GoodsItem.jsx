import { useContext } from 'react';
import { ShopContext } from '../context';

export const GoodsItem = (props) => {
  const {
    mainId, 
    displayName, 
    displayDescription, 
    price: {finalPrice}, 
    displayAssets: [{full_background}],
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <div className="card-title"><b>{displayName}</b></div> 
        <p>
          {displayDescription}
        </p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({
          mainId,
          displayName,
          finalPrice,
        })}>Buy</button>
        <span className="price">{finalPrice}</span>
      </div>
    </div>
  );
};
