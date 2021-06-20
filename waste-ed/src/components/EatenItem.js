import React from 'react';
import ItemCard from './ItemCard';

class EatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(item, status) {
    this.props.updateItem(item, status);
  }

  render() {
    const foodItems = this.props.items.filter(item => item.status === 'eaten').map(item => {
      return (
        <ItemCard key={item.itemID} item={item} itemId={item.itemID} onClick={this.updateItem} />
      )
    });
    console.log("eaten items: ", foodItems);
    return (
      <>
        <div className="eaten-container">
          <h5 className="list-title">Eaten</h5>
          {foodItems}
        </div>
      </>
    )
  }
}

export default EatenItem;
