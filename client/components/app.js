/**
 * Created by Vladislav on 21.01.2018.
 */
import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Projects from './projects';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registered: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({registered : !this.state.registered});
    }

    render() {
        const registered = this.state.registered;
        return (
            <div>
                {(registered ? <SignIn handleChange={this.handleChange} /> :
                               <SignUp handleChange={this.handleChange}/>)}
            </div>
        );
    }
}
