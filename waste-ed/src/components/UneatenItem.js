import React from 'react';
import ItemCard from './ItemCard';

class UneatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          foodItem: "eggs",
          servings: 2,
          expiration: 1,
          img: "https://toppng.com/uploads/preview/eggs-11528350931egreshkuji.png",
          status: "eaten",
        },
        {
          foodItem: "lettuce",
          servings: 3,
          expiration: 3,
          img: "src-link",
          status: "uneaten",
        },
        {
          foodItem: "milk ",
          servings: 1,
          expiration: 6,
          img: "src-link",
          status: "waste",
        }
      ]
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
