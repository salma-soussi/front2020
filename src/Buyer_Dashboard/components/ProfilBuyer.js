import React, { Component } from 'react'
import { Paper, Divider, Button, makeStyles } from '@material-ui/core'
import update from '../../img/updateprofil.svg'
import avatar from '../../img/avatar.svg'
import Main from './Main'
import axios from 'axios'
import { connect } from 'react-redux';

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
            secteur: '',
            address: '',
            occupation: '',
            governorate: '',
            editbutton: false,
    };
    }
    // componentDidMount() {
    //     this.setState({
    //         ...this.props.buyersList.filter(el => el._id === this.props.buyerID)[0]
    //     })
    // }
    
    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleButton = () => {
        this.setState({editbutton: !this.state.editbutton})
        if(this.state.editbutton === true){
            axios.put(`/users/buyer-infos/${this.props.buyerID}`,{
                secteur: this.state.secteur,
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
        axios.get(`/users/buyer/${this.props.buyerID}`)
            .then((res) => {
                this.props.updateBuyer(res.data)
                this.setState({
                    secteur: res.data.secteur,
                    address: res.data.address,
                    phone: res.data.phone,
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    occupation: res.data.occupation,
                    governorate: res.data.governorate,
                })
            })
            
    }
    

    render() {
        const { buyersList } = this.props
        let {imagePreviewUrl} = this.state;
        let imagePreview = <img src={avatar} className="profil-pic" alt="profil pic"/>;
        if (imagePreviewUrl) {imagePreview = (<img src={imagePreviewUrl} className="profil-pic" alt="profil pic"/>)}
        return (
            <Main>
                <Paper className="paper-content">
                    <div className="profil-seller">
                        <div className="header-profil-seller">
                            <div>
                                {imagePreview}
                            </div>
                            <input
                                accept="image/*"
                                className={useStyles.input}
                                id="outlined-button-file"
                                multiple
                                type="file"
                                onChange={(e)=>this.handleImageChange(e)}
                            />
                            <label htmlFor="outlined-button-file">
                                <Button variant="outlined" component="span" className={useStyles.button}>
                                Change Image
                                </Button>
                            </label>
                            {/* // <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} /> */}
                        </div>
                        <Button id='edit-btn' onClick={this.toggleButton}  variant="outlined" color="inherit" className={useStyles.button}>
                            {this.state.editbutton ? 'Confirm Changes' : <img src={update} alt='update profil'/>}
                        </Button>
                        <h1 className="company-name-profil">{buyersList.companyName}</h1>
                        <div className="infos-profil">
                            <div className="titles-info">
                                <div className="list-titles">
                                    <h3 className="title-item-buyer">First Name</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Last Name</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Phone Number</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Email Address</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Category</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Postal Address</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item-buyer">Government</h3>
                                </div>
                            </div>
                            <div className="content-info">
                                <div className="list-content">
                                    <input type="text" onChange={this.handleChange} name="firstName" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.firstName}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="lastName" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.lastName}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="phone" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.phone}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="email" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.email}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="occupation" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.occupation}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="secteur" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.secteur}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="address" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.address}/>
                                    <Divider light={true} variant="middle"/>
                                    <input type="text" onChange={this.handleChange} name="governorate" className={this.state.editbutton ? "content-item-enabled" : "content-item-disabled"} value={this.state.governorate}/>
                                </div>
                            </div>
                        </div>
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
    return{
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