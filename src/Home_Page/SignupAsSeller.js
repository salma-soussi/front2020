import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SignupSeller from './SignupSeller/SignupSeller';

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

class SignupAsSeller extends Component {
    render(){

        return (
            <div style={{marginTop: '15%'}}>
            <form className={useStyles.container} id="form-login" noValidate autoComplete="off">
                <SignupSeller />
            </form>
            <div className="login-footer">
                <p style={{fontSize: '12px', opacity:'0.5'}}>Before sign up, feel free to verify your informations.</p>
            </div>
        </div>
    )
}
}
export default SignupAsSeller;