import React, { Component } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    button: {
        margin: theme.spacing(1),
    },
  }));


class LoginAsBuyer extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            // userID: ''
        }
    }


    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    
    login = e => {
        e.preventDefault();
        axios.post('/users/login', this.state)
            .then((data) => this.props.history.push(`/buyer_dashboard/${data.data.id}`))
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div className="as-buyer-container">
                <h2>Login as a Buyer</h2>
                <form className={useStyles.container} id="form-login" noValidate autoComplete="off">

                    <TextField
                        id="standard-email-input"
                        label="Email"
                        className={useStyles.textField}
                        type="email"
                        autoComplete="email"
                        margin="normal"
                        fullWidth= {true}
                        defaultValue={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                    

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={useStyles.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth= {true}
                        defaultValue={this.state.password}
                        onChange={this.handleChange('password')}
                    />

                </form>
                <div className="login-footer">
                    <div className="login-options">
                        <p><a href="/password">Forget password</a></p>
                        <p>Don't have an account?<Link to="/signupasbuyer">Sign up</Link></p> {/* go to signup as buyer page */}
                    </div>
                    <Link to="/buyer_dashboard" style={{textDecoration: 'none'}} className="button-login">
                        <Button onClick={this.login} variant="contained" color="primary" className={useStyles.button}>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginAsBuyer)