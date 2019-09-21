import React, { Component } from 'react';
import '../static/About.css';
import Jigglypuff from '../Images/Jigglypuff.jpg';
import axios from 'axios';

class About extends Component {
    state = {
        login: 'domi-exe',
        userDetails: [],
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/' + this.state.login)
            .then(res => {
                this.setState({
                    userDetails: res.data
                });
                console.log(res.data);
            })
    }
    
    render() {
        return (
            <div class='About'>
                <img src={Jigglypuff} alt='Avatar' />
                <h1 class='Name'>{this.state.userDetails.name}</h1>
                <h2>GitHub login:
                    <a class='GitHub' href={this.state.userDetails.html_url}>
                        {this.state.login}
                    </a>
                </h2>
                <p>{this.state.userDetails.bio}</p>
            </div>
        );
    }
}

export default About;