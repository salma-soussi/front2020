import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'
import './login.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SnackbarError from '../SnackbarError'

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

class LoginAsSeller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            visible: false
        }
    }


    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    login = e => {
        if (this.state.password !== '' && this.state.email !== '') {
            e.preventDefault();
            axios.post('http://localhost:3020/seller/authentication', this.state)
                .then((data) => this.props.history.push(`/seller_dashboard/${data.data.data.user._id}`))
                .catch((err) => alert(err))
        } else {
            this.setState({ visible: true });
            setTimeout(() => this.setState({ visible: false }), 4000)
            return e.preventDefault()
        }
    }
    render() {
        // const classes = useStyles();
        return (
            <div className="as-buyer-container">
                <h2>Login as a Seller</h2>
                {this.state.visible ? <SnackbarError type={'error'} msg={'Fill in all the required fields!'} /> : null}

                <ValidatorForm style={{ marginTop: '80px', marginBottom: '30px', marginLeft: '60px', marginRight: '60px', flex: '1' }}>
                    <TextValidator
                        type="email"
                        name="email"
                        className={useStyles.textField}
                        margin="normal"
                        label="Email "
                        fullWidth={true}
                        validators={['required', 'isEmail']}
                        errorMessages={['required field', 'invalid email']}
                        defaultValue={this.state.email}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        validatorListener={this.validatorListener}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={useStyles.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        fullWidth={true}
                        defaultValue={this.state.password}
                        onChange={this.handleChange('password')}
                    />
                </ValidatorForm>
                <div className="login-footer">
                    <div className="login-options">
                        <br />
                        <p>Don't have an account? <Link to="/signupasseller">Sign up</Link></p> {/* go to signup as buyer page */}
                    </div>
                    <Link to="/seller_dashboard" style={{ textDecoration: 'none' }} className="button-login">
                        <Button onClick={this.login} variant="contained" color="secondary" className={useStyles.button}>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginAsSeller)