import React from 'react';
import ItemCard from './ItemCard';
import { data } from '../data';


class UneatenItem extends React.Component {
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
    console.log('data', data);
    const uneaten = this.state.items.filter(item => item.status === 'uneaten');
    const foodItems = uneaten.map(item => {
      return (
        <ItemCard key={item.itemID} item={item} itemId={item.itemID} updateList={this.updateList}/>
      )
    });
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
