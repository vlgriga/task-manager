/**
 * Created by Vladislav on 21.01.2018.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            surname : '',
            email : '',
            password : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value});
        console.log(target.value);
    }
    handleSubmit(event){

    }


    render() {
        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <MuiThemeProvider><div>
                    <TextField type="text"
                               hintText="Enter your Name"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleChange} /><br/>

                    <TextField type="text"
                               hintText="Enter your Surname"
                               name="surname"
                               value={this.state.surname}
                               onChange={this.handleChange} /><br/>

                    <TextField type="text"
                               hintText="Enter your Email"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange} /><br/>
                    <TextField type="password"
                               hintText="Enter your Password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange} /><br/>
                </div></MuiThemeProvider>
                <input type="submit" value="Sign Up" />
                <button onClick={this.props.handleChange}>Sign In</button>
            </form>
        );
    }
}
