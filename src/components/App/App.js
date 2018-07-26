import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import axios from 'axios';
import PlanetList from '../PlanetList/PlanetList';

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
        
      },
      planetsList: [
        {name:'',
        rotation_period:'',
        orbital_period: ''
        }
      ]
    }
  }
  
/// will be call once page is load.
  componentDidMount(){
    console.log('componeteDidMount')
    //this is a good place to do a get request
    this.getPlanets();

  }

  getPlanets(){
    //Get request
    axios.get('https://swapi.co/api/planets/?format=json')
    .then((Response) =>{
      console.log(Response)
      this.setState({
        planetsList : Response.data.results
      })
    })
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
        <PlanetList listOfPlanets= {this.state.planetsList}/>
        <Footer />
      </div>
    );
  }
}

export default App;
