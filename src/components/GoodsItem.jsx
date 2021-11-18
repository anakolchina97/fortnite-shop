export const GoodsItem = (props) => {
  const {
    addToBasket,
    mainId, 
    displayName, 
    displayDescription, 
    price: {finalPrice}, 
    displayAssets: [{full_background}]
  } = props;

  return (
    <div className="card" id={mainId}>
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
