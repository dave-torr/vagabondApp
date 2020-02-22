import React, { Component } from 'react';
import Distances from './components/Distances';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, ButtonGroup, Button} from 'react-bootstrap';


class App extends Component {

  state = {
    departurecity: "Miami",
    distance: "3",

  }
  
  inputForms = (e) =>{
    e.preventDefault();
        // console.log(e.target)
    console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({
      departurecity: e.target.city,
      distance: e.target.name,
    })
  }

  render(){
    return (
      <div className="App">
            
      {/* {console.log(this.state)} */}

      {/* form to deploydeparture city OPERATIONAL. Starting point is set to Miami */}
      <Form onChange={this.inputForms}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose your departure city:</Form.Label>
          <br></br>
          <Form.Control name="city" as="select">
            <option>Miami</option>
            <option>Orlando</option>
            <option>Fort Lauderdale</option>
            <option>Tampa</option>
            <option>Fort Meyers</option>
            <option>West Palm Beach</option>
            <option>Jacksonville</option>
            <option>Sanford</option>
            <option>Pensacola</option>
            <option>St. Petersburg</option>
            <option>Sarasota</option>
            <option>Punta Gorda</option>
            <option>fort Walton Beach</option>
            <option>Panama City Beach</option>
            <option>Key West</option>
            <option>Tallahassee</option>
            <option>Daytona Beach</option>
            <option>Melbourne</option>               
          </Form.Control>
        </Form.Group>
        <Form.Label>Choose your driving distance:</Form.Label>
        <br></br>
      <ButtonGroup onClick={this.inputForms} aria-label="Basic example">
        <Button name="1" variant="secondary">Less than 100mi. </Button>
        <Button name="2" variant="secondary">Less than 250 mi.</Button>
        <Button name="3" variant="secondary">I don't mind the distance!</Button>
      </ButtonGroup>
      </Form>
      

      <Distances departurecity={this.state.departurecity} />  
    </div>
     );
  }



}

export default App;
