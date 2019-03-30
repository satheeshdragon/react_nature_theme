import React, { Component } from 'react';
// import axios from 'axios';
// import ListMhs from './Part/ListMhs';
import Navs from './Part/nav';
import Left from './Theme/Left';
// import {
//     Container,
//     Row,
//     Col,
// } from 'reactstrap';
// 
class Theme extends Component {
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
                <Navs />
                <Left />
            
            </div>
        );
    }
}

export default Theme;
