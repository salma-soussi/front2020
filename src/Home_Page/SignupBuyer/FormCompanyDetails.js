import React, { Component } from 'react'
import { Button, TextField, makeStyles, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import SnackbarError from '../../SnackbarError'
import NumberFormat from 'react-number-format';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class FormCompanyDetails extends Component {
    state = { visible: false }
    continue = e => {
        if (this.props.values.companyName === '' || this.props.values.sector === '' ||
            this.props.values.address === '' || this.props.values.phone === '' ||
            this.props.values.email === '') {
            this.setState({ visible: true });
            setTimeout(() => this.setState({ visible: false }), 4000)
            return e.preventDefault()

        } else {
            e.preventDefault()
            this.props.nextStep()
        }
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <h2 style={{ alignSelf: 'center', zIndex: '2', flex: '1', opacity: '0.5' }}>COMPANY<br /> INFORMATIONS</h2>
                {this.state.visible ? <SnackbarError type={'error'} msg={'Fill in all the required fields!'} /> : null}
                <div style={{ marginTop: '60px', flex: '1 1 16%', display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="standard-name-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="Company Name"
                        floatingLabelText="Company Name"
                        onChange={handleChange('companyName')}
                        defaultValue={values.companyName}
                        fullWidth={true}
                    />

                    <FormControl className={useStyles.formControl}>
                        <InputLabel>Sector</InputLabel>
                        <Select
                            fullWidth={true}
                            value={values.sector}
                            onChange={handleChange('sector')}
                        >
                            <MenuItem value="ApparelFashion">Apparel & Fashion</MenuItem>
                            <MenuItem value="ArtCraft">Art & Craft</MenuItem>
                            <MenuItem value="Automative">Automative</MenuItem>
                            <MenuItem value="Furniture">Furniture</MenuItem>
                            <MenuItem value="BusinessSuppliesEquipement">Business Supplies & Equipement</MenuItem>
                            <MenuItem value="ComputerNetworkSecurity">Computer Network & Security</MenuItem>
                            <MenuItem value="Construction">Construction</MenuItem>
                            <MenuItem value="Cosmitics">Cosmitics</MenuItem>
                            <MenuItem value="Electrical">Electrical and Eletronic Manufacturing</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="Postal Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                        fullWidth={true}
                    />
                    <NumberFormat
                        customInput={TextField}
                        format="  ##  ###  ###"
                        mask="_"
                        className={useStyles.textField}
                        margin="normal"
                        label="Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        fullWidth={true}
                    />
                    {/* <TextField
                        id="outlined-number"
                        type="number"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        fullWidth= {true}
                    /> */}
                    <ValidatorForm style={{ marginTop: '-7px', marginBottom: '-7px', flex: '1 1 16%', display: 'flex', flexDirection: 'column' }}>
                        <TextValidator
                            name="email"
                            className={useStyles.textField}
                            margin="normal"
                            label="Email Address"
                            validators={['required', 'isEmail']}
                            errorMessages={['required field', 'invalid email']}
                            value={values.email}
                            onChange={handleChange('email')}
                            validatorListener={this.validatorListener}
                        />
                    </ValidatorForm>
                    {/* <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="Email Address"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        fullWidth={true}
                    /> */}
                    <div style={{ marginTop: '20px' }}>
                        <Button
                            variant="contained"
                            onClick={this.continue}
                            color="primary"
                            style={useStyles.button}
                            fullWidth={true}
                        >
                            Continue
                        </Button>

                    </div>
                </div>
            </div>
        )
    }
}

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: 200,
        minWidth: 260,
    },
    button: {
        margin: theme.spacing(1),
        minWidth: 260,
    },
    formControl: {
        margin: theme.spacing(1),
        width: 200,
        minWidth: 260,

    },
}));


export default FormCompanyDetails