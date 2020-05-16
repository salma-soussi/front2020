import React, { Component } from 'react'
import { Button, TextField, makeStyles, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import SnackbarError from '../../SnackbarError'


export class FormCompanyDetails extends Component {
    state = { visible: false }
    continue = e => {
        if(this.props.values.companyName === '' || this.props.values.sector === '' ||
            this.props.values.address === '' || this.props.values.phone === '' ||
            this.props.values.email === ''){
                this.setState({ visible: true });
                setTimeout(() => this.setState({ visible: false }),4000)
            return e.preventDefault()
            
        }else{
            e.preventDefault()
            this.props.nextStep()
        }
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <h2 style={{alignSelf: 'center', zIndex: '2', flex: '1', opacity: '0.5'}}>COMPANY<br/> INFORMATIONS</h2>
                {this.state.visible ? <SnackbarError type={'error'} msg={'Fill in all the required fields!'}/> : null}
                <div style={{marginTop: '100px', flex: '1 1 16%', display: 'flex', flexDirection: 'column'}}>
                    <TextField
                        id="standard-name-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Company Name"
                        floatingLabelText="Company Name"
                        onChange={handleChange('companyName')}
                        defaultValue={values.companyName}
                        fullWidth= {true}
                    />
                    {/* <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Activity Sector"
                        onChange={handleChange('sector')}
                        defaultValue={values.sector}
                        fullWidth= {true}
                    /> */}

                    <FormControl className={useStyles.formControl}>
                        <InputLabel>Industry</InputLabel>
                        <Select
                        fullWidth= {true}
                        value={values.sector}
                        onChange={handleChange('sector')}
                        >
                        <MenuItem value="HighTech">High Tech</MenuItem>
                        <MenuItem value="HomeAppliance">Home Appliance</MenuItem>
                        <MenuItem value="Furniture">Furniture</MenuItem>
                        <MenuItem value="Office">Office Furniture</MenuItem>
                        <MenuItem value="Mecanic">Mecanic Pieces</MenuItem>
                        <MenuItem value="Clothes">Clothes</MenuItem>
                        <MenuItem value="Accessories">Accessories</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-text-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Postal Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                        fullWidth= {true}
                    />
                    <TextField
                        id="standard-text-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        fullWidth= {true}
                    />
                    <TextField
                        id="standard-email-input"
                        type="email"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Email Address"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        fullWidth= {true}
                    />
                    <div style={{marginTop: '20px'}}>
                        <Button
                            variant="contained"
                            onClick={this.continue}
                            color="secondary"
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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
  }));


export default FormCompanyDetails