import React, { Component } from 'react';
// import axios from 'axios';
// import ListMhs from './Part/ListMhs';
// import Navs from './Part/nav';
// import {
//     Container,
//     Row,
//     Col,
// } from 'reactstrap';
// 
class Left extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: [],
    //     }
    // }


    // componentDidMount() {
    //     axios.get('http://localhost:5500/mhs/')
    //         .then((result) => {
    //             delete this.state.data;
    //             this.setState({
    //                 data: result.data.data
    //             });
    //         })
    // }

    render() {
        // console.log(this.state.data[0])

        return (
            <div>
                <div class="container">
                We live on the most beautiful planet, Earth which has very clean and attractive nature full of greenery. Nature is our best friend which provides us all the resources to live here. It gives us water to drink, pure air to breathe, food to eat, land to stay, animals, plants for our other uses, etc for our betterment. We should fully enjoy the nature without disturbing its ecological balance. We should care our nature, make it peaceful, keep it clean and prevent it from the destruction so that we can enjoy our nature forever. Nature is a most precious gift given by the God to us to enjoy but not to harm.
                </div>
            </div>
        );
    }
}

export default Left;
