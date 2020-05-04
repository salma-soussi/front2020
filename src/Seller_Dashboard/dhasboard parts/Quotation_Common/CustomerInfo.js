import React, { Component } from 'react'
import { TextField, FormControl, InputLabel, Select, OutlinedInput, makeStyles } from '@material-ui/core'
import client from '../../../img/client.svg'
import company from '../../../img/company.svg'
import phone from '../../../img/phone.svg'
import location from '../../../img/location.svg'
import email from '../../../img/email.svg'
import gov from '../../../img/gov.svg'



class CustomerInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            gov: '',
        }
    }
    
    render() {
        const handleChange = name => event => {
            this.setState({
              [this.target.name]: event.target.value,
            });
        };
        return (
            <div className="customer-info-req">
                <div className="icon-and-input">
                    <img src={client} className="icons-req" alt="customer icon"/>
                    <TextField
                        id="outlined-name"
                        label="Customer Name"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.firstName + ' ' + this.props.infos.lastName}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                
                <div className="icon-and-input">
                    <img src={company} className="icons-req" alt="company building icon"/>
                    <TextField
                        id="outlined-name"
                        label="Company Name"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.companyName}
                        margin="normal"
                        variant="outlined"
                    />
                </div>

                <div className="icon-and-input">
                    <img src={phone} className="icons-req" alt="phone icon, phone number"/>
                    <TextField
                        id="outlined-name"
                        label="Phone Number"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.phone}
                        margin="normal"
                        variant="outlined"
                    />
                </div>

                <div className="icon-and-input">
                    <img src={location} className="icons-req" alt="postal address"/>
                    <TextField
                        id="outlined-name"
                        label="Postal Address"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.address}
                        margin="normal"
                        variant="outlined"
                    />
                </div>

                <div className="icon-and-input">
                    <img src={email} className="icons-req" alt="email address"/>
                    <TextField
                        id="outlined-name"
                        label="Email Address"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.email}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="icon-and-input">
                    <img src={gov} className="icons-req" alt="gov"/>
                    <TextField
                        id="outlined-name"
                        label="Governorate"
                        disabled
                        className={useStyles.textField}
                        value={this.props.infos.governorate}
                        margin="normal"
                        variant="outlined"
                    />
                    
                </div>
            </div>
        )
    }
}

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'auto',
    },
}))

export default CustomerInfo
