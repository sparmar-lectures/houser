import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('/api/homes');
    }
    render() { 
        return ( <h1>Hello World</h1> );
    }
}

const mapStateToProps = state => {
console.log("TCL: state", state)
    return {
        
    }
}

const mapDispatchToProps = {

}

 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);