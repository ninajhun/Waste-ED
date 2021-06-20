import React from 'react';
import ItemCard from './ItemCard';

class UneatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(item, status) {
    this.props.updateItem(item, status);
  }

  render() {
    const foodItems = this.props.items.filter(item => item.status === 'uneaten').map(item => {
      return (
        <ItemCard key={item.itemID} item={item} itemId={item.itemID} onClick={this.updateItem} />
      )
    });
    console.log("uneaten items: ", foodItems);
    return (
      <>
        <div className="uneaten-container">
          <h5 className="list-title">Uneaten</h5>
          {foodItems}
        </div>
      </>
    )
  }
}

export default UneatenItem;
