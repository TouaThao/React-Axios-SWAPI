import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      starList : [
        { name : 'Nunki',
          diameter: 132 },
        { name : 'Menkar',
          diameter: 109 }, 
        { name : 'Polaris',
          diameter: 90 }
      ],
      newStar : {
        name : '',
        diameter: ''
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    // take the values on newStar, and add them to starList
    this.setState({
      starList : [
        ...this.state.starList,
        this.state.newStar
      ],
      newStar : {
        name: '',
        diameter: ''
      }
    })
  }

  handleChangeFor = (propertyName) => {
   return (event) => {
      //save whats in the input on newStar.name
      this.setState({
        newStar : {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrentNewStar currentStar={this.state.newStar} />
        <NewStarForm
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
          newStar={this.state.newStar}
        />
        <StarList listOfStars={this.state.starList} />
        <Footer />
      </div>
    );
  }
}

export default App;
