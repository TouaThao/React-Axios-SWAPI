import React, { Component } from 'react';


class Planet extends Component{
  render(){
        
    return(
        <li>
        The Planet Name is{this.props.PlanetData.name} . Have a rotation period  {this.props.PlanetData.rotation_period} 
        . And its orbital period is {this.props.PlanetData.orbital_period}
        </li>
    )
  }
}


export default Planet