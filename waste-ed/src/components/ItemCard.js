import React from 'react';

export default function ItemCard(props) {
  let cardClass = '';
  let numberFont = '';
  if (props.item.expiration >= 4) {
    cardClass = 'green';
    numberFont = 'green-text'
  } else if (props.item.expiration > 1 && props.item.expiration <= 3) {
    cardClass = 'yellow';
    numberFont = 'yellow-text';
  } else {
    cardClass = 'red';
    numberFont = 'red-text'
  }

  const status = props.item.status;
  return (
    <>
      <div className={status === 'uneaten' ? `item-card ${cardClass}` : 'item-card'}>
        <div className="display-item">
          <img src={props.item.img} alt="food" className="food-image"/>
          <div className="food-text">
            {status === 'uneaten'
            ?
            <>
              <span className="food-name">{props.item.foodItem}</span>
              <span className={`${numberFont} number-days`}>{`${props.item.expiration} days`}</span>
            </>
            :
            <span className="food-name">{props.item.foodItem}</span>
            }
          </div>
        </div>
        <div className="icons">
          {status === 'uneaten'
          ?
          <>
            <i className="fas fa-check icon check-mark"></i>
            <i className="fas fa-trash-alt icon trash"></i>
          </>
          :
          <i className="fas fa-plus plus"></i>
          }
        </div>
      </div>
    </>
  )

}
