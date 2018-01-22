/**
 * Created by Vladislav on 21.01.2018.
 */
import React from 'react';


class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailInput : '',
            passInput : ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
                Password:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

