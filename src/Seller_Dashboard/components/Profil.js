import React, { Component } from 'react'
import { Paper, Divider, Button, makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import axios from 'axios'
import update from '../../img/updateprofil.svg'
import avatar1 from '../../img/avatar1.svg'
import Main from './Main'

class Profil extends Component {
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
            governorate: '',
            editbutton: false,
    };
    }

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
            axios.put(`http://localhost:3020/seller/update/${this.props.sellerID}`,{
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
        axios.get(`http://localhost:3020/seller/getByID/${this.props.sellerID}`)
            .then((res) => {
                this.props.updateSeller(res.data)
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
        let {imagePreviewUrl} = this.state;
        const {sellersList} = this.props;
        let imagePreview = <img src={avatar1} className="profil-pic" alt="profil pic"/>;
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
                        <h1 className="company-name-profil">{sellersList.companyName}</h1>
                        <div className="infos-profil">
                            <div className="titles-info">
                                <div className="list-titles">
                                    <h3 className="title-item">First Name</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Last Name</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Phone Number</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Email Address</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Category</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Postal Address</h3>
                                    <Divider light={true} variant="middle"/>
                                    <h3 className="title-item">Government</h3>
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
        sellersList: state.SellerReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateSeller: updated => {
            dispatch({
                type: 'UPDATE_SELLERS',
                updated
            })
        },
        editProfil: sellerInfos => {
            dispatch({
                type: 'EDIT_SELLER',
                sellerInfos
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil)