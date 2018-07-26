import React, { Component } from 'react';


class Planet extends Component{
  render(){
        
    return(
        <li>
        {this.props.PlanetData.name} {this.props.PlanetData.diameter} 
        </li>
    )
  }
}


export default Planet