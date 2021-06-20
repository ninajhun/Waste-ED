import React from 'react';
// import { data } from '../data';

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      expirationDate: ''
    }
    // this.updateList = this.updateList.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   console.log('prevProps:', prevProps);
  //   console.log('this.props:', this.props);
  //   console.log('this.state:', this.state);
  //   if (this.props.status !== prevProps.status) {
  //     // this.setState({ status: this.state.status });

  //   }
  // }

  render () {
    let cardClass = '';
    let numberFont = '';
    if (this.props.item.expiration >= 4) {
      cardClass = 'green';
      numberFont = 'green-text'
    } else if (this.props.item.expiration > 1 && this.props.item.expiration <= 3) {
      cardClass = 'yellow';
      numberFont = 'yellow-text';
    } else {
      cardClass = 'red';
      numberFont = 'red-text'
    }

    const status = this.props.item.status;

    return (
      <>
        < div className={status === 'uneaten' ? `item-card ${cardClass}` : 'item-card'} >
          <div className="display-item">
            <img src={this.props.item.img} alt="food" className="food-image"/>
            <div className="food-text">
              {status === 'uneaten'
              ?
              <>
                  <span className="food-name">{this.props.item.foodItem}</span>
                  <span className={`${numberFont} number-days`}>{`${this.props.item.expiration} days`}</span>
              </>
              :
                <span className="food-name">{this.props.item.foodItem}</span>
              }
            </div>
          </div>
          <div className="icons">
            {status === 'uneaten'
            ?
            <>
              <i className="fas fa-check icon check-mark" onClick={() => {
                  this.setState({ status: 'eaten'});
                  this.props.item.status = 'eaten';

              }}/>
              <i className="fas fa-trash-alt icon trash" onClick={() => {
                  this.setState({ status: 'waste'});
                  this.props.item.status = 'waste';
              }} />
            </>
            :
            <i className="fas fa-plus plus"></i>
            }
          </div>
        </div>
      </>
    );
  }


}
