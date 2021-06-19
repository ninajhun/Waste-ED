import React from 'react';

export default function ItemCard(props) {
  let cardClass = '';
  if (props.item.expiration >= 4) {
    cardClass = 'recent'
  } else if (props.item.expiration > 1 && props.item.expiration <= 3) {
    cardClass = 'soon'
  } else {
    cardClass = 'expired'
  }

  const status = props.item.status;
  return (
    <>
      <div className={status === 'uneaten' ? `item-card ${cardClass}` : 'item-card'}>
        <div className="display-item">
          <img src={props.item.img} alt="food" className="food-image"/>
          <div className="food-text">
            <span className="food-name">{props.item.foodItem}</span>
            <span className="number-days">{`${props.item.expiration} days`}</span>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-check icon check-mark"></i>
          <i className="fas fa-trash-alt icon trash"></i>
        </div>
      </div>
    </>
  )

}
