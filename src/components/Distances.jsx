import React, { Component } from 'react';
import axios from 'axios';


class Distances extends Component {

    state={
      distances: {},
      drivingTimes: {},
    }

    // this post request is operational. Cities should be dynamically picked from user inputs.
    // the distances will then be stored in the state and passed down to next component as props.
    // then filtered and weather query is sent.
    // componentDidMount () {
    //   this.finddistances();
    // }
    componentDidUpdate(prevProps) {
      if(this.props.departurecity !== prevProps.departurecity) {
        this.finddistances();
      }
    }
    finddistances = () =>{
        let distanceQuery = {
            "locations": [
              `${this.props.departurecity}, FL`,
              "Daytona Beach, FL", 
              "Jacksonville, FL",
              "West Palm Beach, FL",
              "Naples, FL",
              "Fort Lauderdale, FL",
              "Orlando, FL",
              "Key West, FL",
              "Sanibel, FL",
              "Sarasota, FL",
              "St. Augustine, FL",
              "Tampa, FL",
              "St. Petersburg, FL",
              "Cape Coral, FL",
              "Pembroke Pines, FL",
              "Hollywood, FL",
              "Miramar, FL",
              "St. Pete Beach, FL",
              "Coral Springs, FL",
              "Miami Gardens, FL",
              "Lehigh Acres, FL",
              "Clearwater, FL",
              "Palm Bay, FL",
              "Pompano Beach, FL",
            ],
            "options": {
              "oneToMany": true
              // syntax of api request. onetoMany gives the result of the first city compared to the rest.
            }
          }

        axios.post('http://www.mapquestapi.com/directions/v2/routematrix?key=Anqh0PH5yocpL1ltCbF1GscwhGvJVGHx', distanceQuery)
        .then(res => {
          // console.log(res)

            
        // Resulting array is given in miles, need to round up before rendering in results.
        // create a time calculator for driving time to render.
        this.setState({
          distances: res.data.distance,
          drivingTimes: res.data.time,
          }) 
      }
      ) 
    }


    render() {
        return (
          <div>
          {console.log(this.state)}

            </div>
        );
    }
}

export default Distances;