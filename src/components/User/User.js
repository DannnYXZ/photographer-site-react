import React from 'react';
import './User.css'
//import axios from "axios";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    componentDidMount() {
      /*
        axios.get('/whoami')
            .then(response => {
                console.log(response.data.username);
                this.setState({
                    username: response.data.username
                });
            });
       */
    }

    render() {
        let buttonText;
        let buttonsSection;
        let link;
        if (!this.state.username) {
            link = '/login';
            buttonText = 'LOGIN';
            buttonsSection = (
                <div className='buttons'>
                    <a href='/login'>LOGIN</a>
                    <a href='/register'>REGISTER</a>
                </div>
            );
        } else {
            link = '/logout';
            buttonText = 'LOGOUT';
            buttonsSection = (
                <div className='buttons'>
                    <a href='/logout'>LOGOUT</a>
                </div>
            );
        }
        return (
            <div className='user'>
                <span className='username'>{this.state.username}</span>
                {buttonsSection}
            </div>
        );
    }
}

export default User;