import React, { Component } from 'react'


export class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3,
        }
        setTimeout(
            () => { window.location.href = '/loginasbuyer' }, 3000)
        setInterval(
            () => this.setState({ count: this.state.count - 1 })
            , 1000)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Account Created Successfuly!</h1>
                <h3>In {`${this.state.count}`} seconds you will be redirected to your dashboard!</h3>
                <p>You will get an email with further instructions</p>
            </div>
        )
    }
}

export default Success
