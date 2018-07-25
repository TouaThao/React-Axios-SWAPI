import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      starList : ['Nunki', 'Menkar', 'Polaris']
    }
  }

  render() {

    // let starListItemArray = [];
    //ew
    // for(let i = 0; i < this.state.starList.length; i++) {
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    //eh, still pushing
    // for(let star of this.state.starList) {
    //   starListItemArray.push(<li>{star}</li>)
    // }

    //map! still pushing!
    // this.state.starList.map( function(star) {
    //   starListItemArray.push(<li>{star}</li>)
    // })

    //Better Map usage
    // let starListItemArray = this.state.starList.map (function(star){
    //   return <li>{star}</li>
    // })

    //best map usage
    let starListItemArray = this.state.starList.map ((star, index) => {
      return <li key={index}>{star}</li>
    })
  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
