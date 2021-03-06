import React, { Component } from 'react';
import Star from '../Star/Star'

class StarList extends Component {

  render() {
    //best map usage
    let starListItemArray = this.props.listOfStars.map ((star, index) => {
      return (
        <Star starData ={star} key ={index} />
      )
    })
  
    return (
        <ul className="App-intro">
          {starListItemArray}
        </ul>
    );
  }
}

export default StarList;
