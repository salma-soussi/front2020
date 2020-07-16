import React, { Component } from 'react'
import { Paper, Container, TextField, Grid, List, ListItemText, Typography, ListItemIcon, Input, ListItem, Divider, Button, makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import update from '../../img/updateprofil.svg'
import avatar from '../../img/avatar.svg'
import Main from './Main'
import axios from 'axios'
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const use = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}))

class ProfilBuyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            sector: '',
            address: '',
            occupation: '',
            governorate: '',
            editbutton: true,
            errorText: '',
            error: false,
            repeatPassword: '',
            password: '',
            avatar: '',
            visible: false,
        };
    }
    openModal = () => {
        this.setState({
            visible: true
        });
    }
    closeModal = () => {
        this.setState({
            visible: false
        });
    }
    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                avatar: file[0],
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)

        const formdata = new FormData();
        formdata.append("avatar", file);

        axios.post(`http://localhost:3020/buyer/upload/${this.props.buyerID}`, formdata)
            .then((res) => {
                console.log("data", res.data);
            })

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    toggleButtonDelete = () => {
        axios.delete(`http://localhost:3020/buyer/delete/${this.props.sellerID}`)
            .then((res) => {
                console.log("data", res.data);
            })
        window.location.href = "/"
    }
    onChange(event) {
        console.log(this.state)
        if (event.target.value === this.state.password) {
            this.setState({ errorText: '', error: false, repeatPassword: event.target.value })
           
        } else {
            this.setState({ errorText: 'invalid password', error: true })
        }
        this.setState({ repeatPassword: event.target.value })
    }
    toggleButton = () => {

        if (this.state.repeatPassword !== "") {
            axios.put(`http://localhost:3020/buyer/update/${this.props.buyerID}`, {
                sector: this.state.sector,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                occupation: this.state.occupation,
                governorate: this.state.governorate,
                password: this.state.repeatPassword,
            })
                .then(() => this.props.editProfil(this.state))
        }else{
            axios.put(`http://localhost:3020/buyer/update/${this.props.buyerID}`, {
                sector: this.state.sector,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                occupation: this.state.occupation,
                governorate: this.state.governorate,
            })
            .then(() => this.props.editProfil(this.state))
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3020/buyer/getByID/${this.props.buyerID}`)
            .then((res) => {
                this.props.updateBuyer(res.data)
                this.setState({
                    sector: res.data.sector,
                    address: res.data.address,
                    phone: res.data.phone,
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    occupation: res.data.occupation,
                    governorate: res.data.governorate,
                    password: res.data.password,
                    avatar: res.data.avatar,
                })
            })

    }


    render() {
        const classes = this.state.phone;
        const { buyersList } = this.props
        let { imagePreviewUrl } = this.state;
        let imagePreview = <img src={avatar} className="profil-pic" alt="profil pic" />;
        let imageAvatar = <img src={`http://localhost:3020/seller/getImage/${this.state.avatar}`} className="profil-pic" alt="profil pic" />;

        if (imagePreviewUrl) { imagePreview = (<img src={imagePreviewUrl} className="profil-pic" alt="profil pic" />) }
        return (
            <Main>
                <Paper className="paper-content">
                    <div className="profil-seller">
                        <div className="header-profil-seller">
                            {this.state.avatar === undefined ? <div>
                                {imagePreview}
                            </div>
                                :
                                <div>
                                    {imageAvatar}
                                </div>}
                            <input
                                accept="image/*"
                                className={useStyles.input}
                                id="outlined-button-file"
                                multiple
                                type="file"
                                onChange={(e) => this.handleImageChange(e)}
                            />
                            <label htmlFor="outlined-button-file">
                                <Button variant="outlined" component="span" className={useStyles.button}>
                                    Change Image
                                </Button>
                            </label>
                            {/* // <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} /> */}
                        </div>



                        <Container maxWidth="lg">
                            <h1 style={{ textAlign: 'center' }}>{buyersList.companyName}</h1>
                            <div style={{ display: 'flex', marginTop: '-10px', flex: '1 1 16%' }}>
                                <Grid item xs={6}>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
                                        <List style={{ alignSelf: 'center' }}>
                                            <ListItem >
                                                <ListItemIcon >
                                                    <AccountCircleIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >First Name</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <AccountBoxIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Last Name</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <PhoneIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Phone Number</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <EmailIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Email Address</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <WorkIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >sector</Typography>} />
                                            </ListItem>


                                        </List>
                                        <Divider />
                                        <List style={{ alignSelf: 'center' }}>
                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <Input value={this.state.firstName} onChange={this.handleChange} name="firstName" inputProps={{ 'aria-label': 'description' }} />
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <Input value={this.state.lastName} name="lastName" onChange={this.handleChange} inputProps={{ 'aria-label': 'description' }} />
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <NumberFormat
                                                        customInput={TextField}
                                                        format="  ##  ###  ###"
                                                        mask="_"
                                                        className={useStyles.textField}
                                                        onChange={this.handleChange}
                                                        defaultValue={classes}
                                                        // value={classes}
                                                        fullWidth={true}
                                                        name="phone"
                                                        placeholder={classes}
                                                    />
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <ValidatorForm >
                                                        <TextValidator
                                                            name="email"
                                                            className={useStyles.textField}
                                                            validators={['required', 'isEmail']}
                                                            errorMessages={['required field', 'invalid email']}
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                            validatorListener={this.validatorListener}
                                                        />
                                                    </ValidatorForm>
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <Input value={this.state.sector} name="sector" onChange={this.handleChange} inputProps={{ 'aria-label': 'description' }} />
                                                } />
                                            </ListItem>



                                        </List>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
                                        <List style={{ alignSelf: 'center' }}>
                                            <ListItem >
                                                <ListItemIcon >
                                                    <HomeIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Postal Address</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <LocationOnIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Government</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <LockIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Password</Typography>} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemIcon >
                                                    <VisibilityOffIcon />
                                                </ListItemIcon>
                                                <ListItemText className="list-titles" primary={<Typography variant="h6" >Repeat Password</Typography>} />
                                            </ListItem>

                                        </List>
                                        <Divider />
                                        <List style={{ alignSelf: 'center' }}>
                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <Input value={this.state.address} name="address" onChange={this.handleChange} inputProps={{ 'aria-label': 'description' }} />
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <Input value={this.state.governorate} name="governorate" onChange={this.handleChange} inputProps={{ 'aria-label': 'description' }} />
                                                } />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <TextField
                                                        id="standard-password-input"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        className={useStyles.textField}
                                                        onChange={this.handleChange}
                                                        defaultValue={this.state.password}
                                                        fullWidth={true}
                                                        placeholder="password"
                                                    />} />
                                            </ListItem>

                                            <ListItem >
                                                <ListItemText className="list-titles" primary={
                                                    <TextField
                                                        id="standard-password-input"
                                                        type="password"
                                                        name="repeatPassword"
                                                        autoComplete="current-password"
                                                        className={useStyles.textField}
                                                        helperText={this.state.errorText}
                                                        error={this.state.error}
                                                        onChange={this.onChange.bind(this)}
                                                        defaultValue={this.state.repeatPassword}
                                                        fullWidth={true}
                                                        placeholder="Repeat Password"
                                                    />
                                                } />
                                            </ListItem>

                                        </List>
                                    </div>
                                </Grid>
                            </div>
                        </Container>
                        <Button
                            id='edit-btn1'
                            className={useStyles.button}
                            style={{ marginLeft: "830px" }}
                            variant="contained"
                            color="primary"
                            className={use.button}
                            startIcon={<EditIcon />}
                            onClick={this.toggleButton}
                        >
                            Edit
                        </Button>
                        <Button
                            style={{ marginLeft: "10px" }}
                            variant="contained"
                            color="secondary"
                            className={use.button}
                            startIcon={<DeleteIcon />}
                            onClick={this.openModal}
                        >
                            Delete
                        </Button>
                        <section>
                        <Modal visible={this.state.visible} width="450" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <br/>
                                <p style={{ opacity: '.5' }}>Are you sure you want to delete your account?</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.toggleButtonDelete}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                    </div>
                </Paper>
            </Main>
        )
    }
}
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}));

const mapStateToProps = state => {
    return {
        buyersList: state.BuyerReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateBuyer: updated => {
            dispatch({
                type: 'UPDATE_USERS',
                updated
            })
        },
        editProfil: buyerInfos => {
            dispatch({
                type: 'EDIT_BUYER',
                buyerInfos
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilBuyer)