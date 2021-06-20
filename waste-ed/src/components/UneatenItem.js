import React from "react";
import ItemCard from "./ItemCard";
// import { data } from '../data';

class UneatenItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: data.food
  //   }
  //   // this.updateList = this.updateList.bind(this);
  // }

  // updateList() {
  //   this.setState({ items: data.food });
  //   console.log('hi');
  // }

  // componentDidUpdate(prevProps) {
  //   console.log("prevProps:", prevProps);
  //   console.log("this.props:", this.props);
  //   console.log("this.state:", this.state);
  //   if (this.props.status !== prevProps.status) {
  //     this.setState({ status: this.state.status });
  //   }
  // }

  render() {
    // console.log("data", data);
    // const uneaten = this.props.uneatenItems.filter(
    //   (item) => item.status === "uneaten"
    // );
    const foodItems = this.props.uneatenItems.map((item) => {
      return (
        <ItemCard
          key={item.itemID}
          item={item}
          itemId={item.itemID}
          setCurrentData={this.props.setCurrentData}
          currentData={this.props.currentData}
        />
      );
    });
    return (
      <>
        <div className="uneaten-container">
          <h5 className="list-title">Uneaten</h5>
          {foodItems}
        </div>
      </>
    );
  }
}

export default UneatenItem;
