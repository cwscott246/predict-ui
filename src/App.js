import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Table from './js/components/Table'
import './App.css';
import './css/Button.css'



class App extends Component {

  constructor() {
    super();
    this.state = { items : [] };
    this.getLines = this.getLines.bind(this);
  }

  getLines() {

      fetch("http://localhost:8080/lines?sport=football").then(result => {
        return result.json();
      }).then(data => {
        this.setState({items: data.event});
      });

  }

    
  
  render() {

    return (
      <div className="App container" >

        <div className="App-header">
          <Button bsSize="large" className="button-color pull-right">Account</Button>
          <Button bsSize="large" className="button-color pull-right" onClick={this.getLines}>Lines</Button>
          <Button bsSize="large" className="button-color pull-right">Make A Pick</Button>
          <Button bsSize="large" className="button-color pull-right">Home</Button>
        </div>
        <div>
          <Table lines={this.state.items} /> 
        </div>
      </div>
    );
  }
}

export default App;
