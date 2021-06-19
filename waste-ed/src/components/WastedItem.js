import React from 'react';
import ItemCard from './ItemCard';

const jsonData = localStorage.getItem("local-data");
const items = JSON.parse(jsonData);


class WastedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }


  render() {
    const wasted = this.state.items.filter(item => item.status === 'waste')
    const foodItems = wasted.map(item => {
      return (
        <ItemCard key={item.foodItem} item={item}/>
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
