import React, { Component } from 'react'
import LoginAsSeller from './LoginAsSeller';
import './login.css'
import {Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'




class Login2 extends Component{
    constructor(props){
        super(props);
        this.state={
            isBuyer: false,
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
                    <div className="media-card-seller">
                        <h1 className="h1-name">SELLER</h1>
                        <Link to='/loginasbuyer' className="button-switch"><button className={this.state.isBuyer ? "seller-btn" : "buyer-btn"}>Login as a Buyer ↪</button></Link>
                    </div>
                    <LoginAsSeller/>
            </Paper>
        </div>    
        </div>
    )
}
}
export default Login2;
