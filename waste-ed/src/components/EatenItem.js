import React from 'react';
import ItemCard from './ItemCard';
import { data } from '../data';


class EatenItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.food
    }
    // this.updateList = this.updateList.bind(this);
  }

  // updateList() {
  //   this.setState({ items: data.food });
  //   console.log('hi');
  // }

  // componentDidUpdate() {

  // }

  render() {
  console.log('data', data);
    const eaten = this.props.eatenItems.filter(item => item.status === 'eaten')
    const foodItems = eaten.map(item => {
      return (
        <ItemCard key={item.itemID} item={item} itemId={item.itemID} />
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
