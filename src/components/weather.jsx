import React, { Component } from 'react';
import axios from 'axios';


class Weather extends Component {

    state = {
        climate: []
    }

    // get request is operationl.
    // dynamically change the weather request for every cityin the list of best beaches.
    // filter array of objects according to certain weather parameters.
        weatherQuery = () => {
            axios.get('https://api.openweathermap.org/data/2.5/weather?id=4164138&appid=130db3685f541076f7cceda7fe5ef64f')
            .then(res => {
                console.log(res)
                this.setState({
                    // climate: res.data,
                })
            })
            .catch(err => console.log(err))

        }

    //  tops 85 f
    // 75 and 80 f.
    // If state is true, render weather info, else, render spinner or other load screen.
    render() {
        return (
            <div>
                {/* {this.weatherQuery()} */}
            </div>
        );
    }
}

export default Weather;