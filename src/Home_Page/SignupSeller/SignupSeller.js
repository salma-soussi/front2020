import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import FormCompanyDetails from './FormCompanyDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm  from './Confirm'
import Success from './Success'

export class SignupSeller extends Component {
    constructor(props) {
        super(props);
        this.state={
            step: 1,
            isBuyer: true,
            companyName: '',
            sector: '',
            address: '',
            phone: '',
            email: '',
            firstName: '',
            lastName: '',
            occupation: '',
            governorate: '',
            password: '',
        }
    }
    // Go next step
    nextStep = () => {
        const { step } = this.state
        this.setState({step: step + 1})
    }
    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({step: step - 1})
    }

    // Add new User to Database
    submmitToDb = () => {
        axios.post('http://localhost:3020/seller/add', this.state)
                .then(() => (this.props.newSeller({...this.state})))
                .catch((err) => alert(err))
    }
    
    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state
        const { companyName, sector, address, phone, email, firstName, lastName, occupation, governorate, password } = this.state
        const values = { companyName, sector, address, phone, email, firstName, lastName, occupation, governorate, password }
        switch(step){
            case 1:
                return (
                    <FormCompanyDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        submmitToDb={this.submmitToDb}
                        values={values}
                    />
                )
            case 4:
                return <Success />
            default:
                return (
                    <FormCompanyDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
    }
}

const mapDispatchToProps = dispatch  => {
    return{
        newSeller: payload => {
            dispatch({
                type: 'NEW_SELLER',
                payload
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(SignupSeller)
