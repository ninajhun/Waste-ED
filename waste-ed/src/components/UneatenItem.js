import React from 'react';
import ItemCard from './ItemCard';

const jsonData = localStorage.getItem("local-data");
const items = JSON.parse(jsonData);


class UneatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }


  render() {
    const uneaten = this.state.items.filter(item => item.status === 'uneaten')
    const foodItems = uneaten.map(item => {
      return (
        <ItemCard key={item.foodItem} item={item}/>
      )
    })
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
