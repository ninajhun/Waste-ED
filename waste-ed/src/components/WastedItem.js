import React from 'react';
import ItemCard from './ItemCard';
import { data } from '../data';

class WastedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.food
    }
    this.updateList = this.updateList.bind(this);
  }

  updateList() {
    this.setState({ items: data.food });
    console.log('hi');
  }

  render() {
    const wasted = this.state.items.filter(item => item.status === 'waste')
    const foodItems = wasted.map(item => {
      return (
        <ItemCard key={item.itemID} item={item} itemId={item.itemID} updateList={this.updateList} />
      )
    })
    return (
      <>
        <div className="wasted-container">
          <h5 className="list-title">Wasted</h5>
          {foodItems}
        </div>
      </>
    )
  }
}

export default WastedItem;
