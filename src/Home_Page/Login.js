import React, { Component } from 'react'
import LoginAsBuyer from './LoginAsBuyer';
import './login.css'
import {Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'





class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            isBuyer: true,
        }
    }
    handleToggle = () => {
        let currentState = this.state.isBuyer
        this.setState({isBuyer: !currentState})
    }

    render(){
        return (
        <div className="whatever">
            <div className="form-container">
                <Paper>
                    <div className="media-card">
                        <h1 className="h1-name">BUYER</h1>
                        <Link to='/loginasseller' className="button-switch">
                            <button className="seller-btn" onClick={() => this.handleToggle}>Login as a Seller ↪</button>
                        </Link>
                    </div>
                    <LoginAsBuyer/>
                </Paper>
            </div>    
        </div>
    )
}
}
export default Login;