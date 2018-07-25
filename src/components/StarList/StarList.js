import React, { Component } from 'react';

class App extends Component {

  render() {
    //best map usage
    let starListItemArray = this.props.listOfStars.map ((star, index) => {
      return (
        <li key={index}>
          The star "{star.name}" is {star.diameter} million km in diameter.
        </li>
      )
    })
  
    return (
        <ul className="App-intro">
          {starListItemArray}
        </ul>
    );
  }
}

export default App;
