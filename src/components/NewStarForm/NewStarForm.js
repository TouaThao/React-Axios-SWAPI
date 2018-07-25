import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>

          <input value={this.props.newStar.name} placeholder="star name" onChange={this.props.handleChangeFor('name')}/>
          <input value={this.props.newStar.diameter} placeholder="diameter" onChange={this.props.handleChangeFor('diameter')}/>
          <input type="submit"/>

        </form>
    );
  }
}

export default App;
