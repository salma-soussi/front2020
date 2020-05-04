import React, { Component } from 'react'
import SignupAsBuyer from './SignupAsBuyer';
import './login.css'
import {Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'





class Signup extends Component {
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
        <div className="signup-container">
            <div className="form-container">
                <Paper>
                    <div className={this.state.isBuyer ? "media-card" : "media-card-seller"}>
                        <h1>BUYER</h1>
                        <Link to='/signupasseller' className="button-switch">
                            <button className={this.state.isBuyer ? "buyer-btn" : "seller-btn"}
                            onClick={() => this.handleToggle}>
                                Signup as a Seller ↪
                            </button>
                        </Link>
                    </div>
                    <SignupAsBuyer/>
                </Paper>
            </div>    
        </div>
    )
}
}
export default Signup;