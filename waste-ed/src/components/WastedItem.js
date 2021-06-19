import React from 'react';
import ItemCard from './ItemCard';

const jsonData = localStorage.getItem("local-data");
const items = JSON.parse(jsonData);


class WastedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
      // [
      //   {
      //     foodItem: "eggs",
      //     servings: 2,
      //     expiration: 1,
      //     img: "https://toppng.com/uploads/preview/eggs-11528350931egreshkuji.png",
      //     status: "eaten",
      //   },
      //   {
      //     foodItem: "lettuce",
      //     servings: 3,
      //     expiration: 3,
      //     img: "https://www.vhv.rs/dpng/d/88-883016_iceberg-lettuce-png-transparent-png.png",
      //     status: "uneaten",
      //   },
      //   {
      //     foodItem: "milk ",
      //     servings: 1,
      //     expiration: 6,
      //     img: "https://toppng.com/uploads/preview/milk-png-115540200115wsmxoplcu.png",
      //     status: "waste",
      //   }
      // ]
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
