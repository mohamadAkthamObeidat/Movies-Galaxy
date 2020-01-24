import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import '../Assets/CSS/Login.css';
import axios from 'axios';
import AuthHelper from '../Utils/AuthHelper';
import { Link } from 'react-router-dom';
class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            // Change Name And Value Depend On Input Change Status.
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const user = await axios.post('/login', this.state);
        const { token } = user.data;
        const Auth = new AuthHelper();
        Auth.setToken(token);
    };

    render() {
        return (
            <div className="login-page">
                <NavBar></NavBar>
                <div className="form-container">
                    <form method="post" className="reg-form">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="yourmail@example.com"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password..."
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />

                        <button
                            onClick={this.handleSubmit}
                            className="reg-btn"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
