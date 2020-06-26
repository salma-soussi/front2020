import React, { useEffect } from 'react'
import { Paper, TextField, makeStyles, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import backarrow from '../../img/backarrow.svg'
import Main from '../components/Main';


const initialState = {
    message: "",
    email: "",
    yourName: "",
};
const messageInitialState = {
    myName: "",
    myEmail: "",
    subject: "",
    myMessage: "",
};

function CustomerContact(props) {
    const { customerInfo } = props
    const classes = useStyles();
    const [values, setValues] = React.useState({
        companyName: 'just',
        customerName: 'salma',
        lastTime: '07/5/2020',
        numberOfTimes: 2,
        emailCustomer: 'just.pfe@gmail.com',
    });
    const [{ message, email, yourName }, setMail] = React.useState(initialState);
    const [{ myName, myEmail, subject, myMessage }, setMessage] = React.useState(messageInitialState);

    // EMAIL FORM
    const resetEmail = () => {
        setMail({ ...initialState });
    };
    const handleChangeMail = name => event => {
        setMail({ ...{ message, email, yourName }, [name]: event.target.value });
    };
    // MESSAGE FORM
    const handleChangeMessage = name => event => {
        setMessage({ ...{ myName, myEmail, subject, myMessage }, [name]: event.target.value });
    };
    const resetMessage = () => {
        setMessage({ ...messageInitialState });
    };


    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    const fetchCustomer = () => {
        customerInfo.filter(el => el.customerID === props.customerID)
    }
    useEffect(() => fetchCustomer(), [])
    if (window.location.pathname.split('/').length - 1 >= 2) {
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <Main>
            <div className="navigation-buttons-req">
                <Button button component={Link} to={`/seller_dashboard/o/customers/${pathID}`} variant="contained" id="button-back" className={useStyles.button}>
                    <img src={backarrow} alt="reply page" style={{ width: '30px' }} />
                    <h5>Customers</h5>
                </Button>
            </div>
            <Paper>

                {customerInfo.map((x, index) => index <= 0 && (
                    <div className="customer-infos" key={index}>
                        <TextField
                            id="standard-name"
                            multiline={true}
                            label="Company Name"
                            className={classes.textField}
                            value={x.companyName}
                            margin="normal"
                            onChange={handleChange('companyName')}
                            style={{ pointerEvents: 'none' }}
                        />

                        <TextField
                            id="standard-name"
                            multiline={true}
                            label="Customer Name"
                            className={classes.textField}
                            value={x.firstName + ' ' + x.lastName}
                            margin="normal"
                            onChange={handleChange('customerName')}
                            style={{ pointerEvents: 'none' }}
                        />

                        <TextField
                            id="standard-name"
                            multiline={true}
                            label="Last Operation"
                            className={classes.textField}
                            value={String(x.date).slice(0, 10)}
                            margin="normal"
                            onChange={handleChange('lastTime')}
                            style={{ pointerEvents: 'none' }}
                        />

                        <TextField
                            id="standard-name"
                            multiline={true}
                            label="Times dealt with"
                            className={classes.textField}
                            value={customerInfo.filter(el => el.status === 'Sold' && el.customerID === props.customerID).length}
                            margin="normal"
                            onChange={handleChange('numberOfTimes')}
                            style={{ pointerEvents: 'none' }}
                        />

                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            name="email"
                            // value={x.emailCustomer}
                            value="this-email-is-static@gmail.com"
                            margin="normal"
                            style={{ pointerEvents: 'none' }}
                        />
                    </div>
                ))
                }
                <br />
                <br />
                <div className="contact-field">
                    <form action={`mailto:${values.emailCustomer}`} method="post" enctype="text/plain">
                        <h1 style={{ marginBottom: '0' }}>Send Email:</h1>
                        <p style={{ opacity: '.5', margin: '0px' }}>If you are using Outlook as mailing tool</p>
                        <TextField
                            id="outlined-email-input"
                            label="Your Name"
                            onChange={handleChangeMail('yourName')}
                            className={classes.textField}
                            name="yourName"
                            value={yourName}
                            variant="outlined"
                            margin="normal"
                        /><br />
                        <TextField
                            id="outlined-email-input"
                            label="Your Email"
                            onChange={handleChangeMail('email')}
                            className={classes.textField}
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            variant="outlined"
                            margin="normal"
                        /><br />
                        <TextField
                            id="outlined-multiline-input"
                            label="Your Message"
                            onChange={handleChangeMail('message')}
                            className={classes.textField}
                            name="message"
                            multiline
                            value={message}
                            variant="outlined"
                            margin="normal"
                            rows={7}
                            rowsMax={10}
                        /><br />
                        <Button variant="outlined" color="primary" type="submit" className={classes.button}>
                            Send E-mail
                        </Button>

                        <Button variant="outlined" color="secondary" onClick={resetEmail} className={classes.button}>
                            Reset
                        </Button>
                    </form>
                    {/*********** OR ***********************/}
                    <div class="vertical-divider">or</div>
                    {/********** OR  *****************/}

                    <form action={`mailto:${values.emailCustomer}`} method="post" enctype="text/plain">
                        <h1 style={{ marginBottom: '0' }}>Direct Messaging:</h1>
                        <p style={{ opacity: '.5', margin: '0px' }}>Use direct message with our app, the receiver will be notified.</p>
                        <TextField
                            id="outlined-name-input"
                            label="Your Name"
                            onChange={handleChangeMessage('myName')}
                            className={classes.textField}
                            name="myName"
                            value={myName}
                            variant="outlined"
                            margin="normal"
                        /><br />
                        <TextField
                            id="outlined-email-input"
                            label="Your Email"
                            onChange={handleChangeMessage('myEmail')}
                            className={classes.textField}
                            name="myEmail"
                            type="email"
                            autoComplete="email"
                            value={myEmail}
                            variant="outlined"
                            margin="normal"
                        /><br />
                        <TextField
                            id="outlined-subject-input"
                            label="Subject"
                            onChange={handleChangeMessage('subject')}
                            className={classes.textField}
                            name="subject"
                            multiline
                            value={subject}
                            variant="outlined"
                            margin="normal"
                        /><br />
                        <TextField
                            id="outlined-multiline-input"
                            label="Your Message"
                            onChange={handleChangeMessage('myMessage')}
                            className={classes.textField}
                            name="myMessage"
                            multiline
                            value={myMessage}
                            variant="outlined"
                            margin="normal"
                            rows={3}
                            rowsMax={6}
                        /><br />
                        <Button variant="outlined" color="primary" type="submit" className={classes.button}>
                            Send Message
                        </Button>

                        <Button variant="outlined" color="secondary" onClick={resetMessage} className={classes.button}>
                            Reset
                        </Button>
                    </form>

                </div>


            </Paper>
        </Main>
    )
}

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const mapStateToProps = state => {
    return {
        customerInfo: state.reducerReqWaiting
    }
}

export default connect(mapStateToProps)(CustomerContact);