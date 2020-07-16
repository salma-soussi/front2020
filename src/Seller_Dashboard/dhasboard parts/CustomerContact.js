import React, { useEffect } from 'react'
import { Paper, TextField, makeStyles, Button, Container } from '@material-ui/core';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import backarrow from '../../img/backarrow.svg'
import Main from '../components/Main';
import axios from 'axios'

const initialState = {
    to: "",
    text: "",
    subject: "",
    name: ""
};


function CustomerContact(props) {
    const { customerInfo } = props

    const [state, setState] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        governorate: '',
        info1: {},
        sellerinfo:{},
        info2: {}
    });
    const classes = useStyles();
    const [values, setValues] = React.useState({
        companyName: 'just',
        customerName: 'salma',
        lastTime: '28/6/2020',
        numberOfTimes: 2,
        emailCustomer: 'just.pfe@gmail.com',
        name: ""
    });
    const [{ to, subject, text }, setMail] = React.useState(initialState);

    const handelSubmit = () => {
        axios.post("http://localhost:3020/email/send", {

            to: "soussiselma@hotmail.com",
            subject: subject,
            text: text,
            firstName:state.sellerinfo.firstName,
            lastName:state.sellerinfo.lastName,
            emailSeller:state.sellerinfo.email,
            phone: state.sellerinfo.phone,
            address: state.sellerinfo.address,
            governorate: state.sellerinfo.governorate,
        })
            .then(res => {
                console.log("respose", res.data);
                if (res.data['status'] === "error") {
                    alert(" verifier votre adresse")
                }
                else {
                    alert("Email Envoyer ! ");
                    if (window.location.pathname.split('/').length - 1 >= 2) {
                        var pathID = window.location.pathname.substr(-24)
                    }
                    this.props.history.push(`/seller_dashboard/o/customers/${pathID}`)
                }

            })
    }
    const resetEmail = () => {
        setMail({ ...initialState });
    };
    const handleChangeMail = name => event => {
        setMail({ ...{ to, subject, text }, [name]: event.target.value });

    };


    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    var tes = []
    var fin = {}
    const fetchCustomer = () => {
        const customer = customerInfo.filter(el => el._id === props.customerID);

        axios.get(`http://localhost:3020/buyer/list`)
            .then((res) => {
                console.log("res.data")
                console.log(res.data)
                res.data.forEach(function (item) {
                    if (item.firstName == customer[0].firstName && item.lastName == customer[0].lastName) {
                        tes.push(item._id);
                    }
                });
                console.log("tes")
                console.log(tes)
                axios.get(`http://localhost:3020/buyer/getByID/${tes[0]}`)
                    .then((res) => {
                        console.log("res")
                        console.log(res)

                        fin = res.data;
                        // fin.push(customer[0]);

                        setState({ ...state, info1: fin, email: "hi" });
                        setState({ ...state, info2: customer[0] });
                        axios.get(`http://localhost:3020/seller/getByID/${props.sellerID}`)
                        .then((res) => {
                            setState({ ...state, sellerinfo: res.data });
                        })
                    })
            })
        
    }
    useEffect(() => fetchCustomer(), [])
    if (window.location.pathname.split('/').length - 1 >= 2) {
        var pathID = window.location.pathname.substr(-24)
    }
    const customersListFiltered = customerInfo.filter(el => el._id === props.customerID)
    console.log("props")
    console.log(props)
    console.log("state2")
    console.log(state)
    return (
        <Main>
            <div className="navigation-buttons-req">
                <Button button component={Link} to={`/seller_dashboard/o/customers/${pathID}`} variant="contained" id="button-back" className={useStyles.button}>
                    <img src={backarrow} alt="reply page" style={{ width: '25px' }} />
                    <h5>Customers</h5>
                </Button>
            </div>
            <Container maxWidth="md">
                <Paper>

                    {customersListFiltered.map((x, index) => index <= 0 && (
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
                                id="standard-name"
                                multiline={true}
                                label="Email"
                                className={classes.textField}
                                name="to"
                                // value={state.info1.email}
                                value="soussiselma@hotmail.com"
                                onChange={handleChangeMail('to')}
                                margin="normal"
                                style={{ pointerEvents: 'none' }}
                                InputLabelProps={{ shrink: true }}
                            />

                        </div>
                    ))
                    }
                    <br />
                    <br />
                    <div className="contact-field">
                        <form enctype="text/plain" style={{ marginBottom: '0' }}>
                            <h1 style={{ marginBottom: '0' }}>Send Email:</h1>
                            {customersListFiltered.map((x, index) => index <= 0 && (
                                <TextField
                                    id="outlined-email-input"
                                    label="Your Name"
                                    onChange={handleChange('name')}
                                    className={classes.textField}
                                    name="yourName"
                                    variant="outlined"
                                    margin="normal"
                                    value={x.firstName + ' ' + x.lastName}
                                />
                            ))
                            }
                            <br />
                            <TextField
                                id="outlined-email-input"
                                label="The subject"
                                onChange={handleChangeMail('subject')}
                                className={classes.textField}
                                name="subject"
                                value={subject}
                                variant="outlined"
                                margin="normal"
                            /><br />
                            <TextField
                                id="outlined-multiline-input"
                                label="Your Message"
                                onChange={handleChangeMail('text')}
                                className={classes.textField}
                                name="text"
                                multiline
                                value={text}
                                variant="outlined"
                                margin="normal"
                                rows={7}
                                rowsMax={10}
                            /><br />
                            <Button color="primary" onClick={handelSubmit} type="submit" >
                                Send E-mail
                        </Button>

                            <Button variant="outlined" color="secondary" onClick={resetEmail} >
                                Reset
                        </Button>
                        </form>


                    </div>


                </Paper>
            </Container >
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