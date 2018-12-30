import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.goToLogin = this.goToLogin.bind(this);
    }
   goToLogin() {
       this.props.history.push('login')
   }
    render() {
        return (
            <div style={{margin:'100px'}}>
            <h1>
                Welcome Bro 
                <button onClick={this.goToLogin}>Logout</button>
            </h1>
            </div>
        )
    }
}