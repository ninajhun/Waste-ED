import React from 'react';
import ItemCard from './ItemCard';

const jsonData = localStorage.getItem("local-data");
const items = JSON.parse(jsonData);

class EatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }


  render() {
    const eaten = this.state.items.filter(item => item.status === 'eaten')
    const foodItems = eaten.map(item => {
      return (
        <ItemCard key={item.foodItem} item={item}/>
      )
    })
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
