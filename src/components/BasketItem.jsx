import { useContext } from 'react';
import { ShopContext } from '../context';

export const BasketItem = (props) => {
  const {
    mainId, 
    displayName,
    finalPrice, 
    quantity,
  } = props;

  const { removeFromBasket,  incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(mainId)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>{" "}
      = {finalPrice * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
