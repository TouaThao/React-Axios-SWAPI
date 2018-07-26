import React, { Component } from 'react';
import Planet from '../Planet/Planet'

class PlanetList extends Component {

  render() {

    let PlanetListArray = this.props.listOfPlanets.map ((planet, index) => {
      return (
        <Planet PlanetData ={planet} key ={index} />
      )
    })
  
    return (
        
        <ul className="App-intro">
          {PlanetListArray}
        </ul>
        
    );
  }
}

export default PlanetList;