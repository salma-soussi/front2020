import React, { Component } from 'react'
import SignupAsSeller from './SignupAsSeller';
import './login.css'
import {Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'





class Signup2 extends Component {
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
                    <div className={this.state.isBuyer ? "media-card-seller" : "media-card"}>
                        <h1>SELLER</h1>
                        <Link to='/signupasbuyer' className="button-switch">
                            <button className={this.state.isBuyer ? "seller-btn" : "buyer-btn"}
                                onClick={() => this.handleToggle}>
                                Signup as a Buyer ↪
                            </button>
                        </Link>
                    </div>
                    <SignupAsSeller />
                </Paper>
            </div>    
        </div>
    )
}
}
export default Signup2;