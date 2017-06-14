import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      apiResult: ""
    }
  }
  componentWillMount(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=UPsf8dEaC4niRAn9GwmjNOBCuzPUdUcswYlWNYtA')
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  render() {
    return (

      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
