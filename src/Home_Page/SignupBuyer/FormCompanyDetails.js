import React, { Component } from 'react'
import { Button, TextField, makeStyles, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import SnackbarError from '../../SnackbarError'

export class FormCompanyDetails extends Component {
    state = { visible: false }
    continue = e => {
        if(this.props.values.companyName === '' || this.props.values.secteur === '' ||
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

                    <FormControl className={useStyles.formControl}>
                        <InputLabel>Industry</InputLabel>
                        <Select
                        fullWidth= {true}
                        value={values.secteur}
                        onChange={handleChange('secteur')}
                        >
                        <MenuItem value="Accounting">Accounting</MenuItem>
                        <MenuItem value="ApparelFashion">Apparel & Fashion</MenuItem>
                        <MenuItem value="ArchitecturePlanning">Architecture & Planning</MenuItem>
                        <MenuItem value="ArtCraft">Art & Craft</MenuItem>
                        <MenuItem value="Automative">Automative</MenuItem>
                        <MenuItem value="Banking">Banking</MenuItem>
                        <MenuItem value="BusinessSuppliesEquipement">Business Supplies & Equipement</MenuItem>
                        <MenuItem value="Chemicals">Chemicals</MenuItem>
                        <MenuItem value="CivilEngineering">Civil Engineering</MenuItem>
                        <MenuItem value="ComputerNetworkSecurity">Computer Network & Security</MenuItem>
                        <MenuItem value="Construction">Construction</MenuItem>
                        <MenuItem value="Construction">Construction</MenuItem>
                        <MenuItem value="Cosmitics">Cosmitics</MenuItem>
                        <MenuItem value="Design">Design</MenuItem>
                        <MenuItem value="Education">Education</MenuItem>
                        <MenuItem value="Electrical">Electrical and Eletronic Manufacturing</MenuItem>
                        <MenuItem value="Entertainement">Entertainement</MenuItem>
                        <MenuItem value="EventServices">Event Services</MenuItem>
                        <MenuItem value="EventServices">Financial Services</MenuItem>
                        <MenuItem value="FoodProd">Food Production</MenuItem>
                        <MenuItem value="Government">Government Administration</MenuItem>
                        <MenuItem value="Health">Health & Wellness & Fitness</MenuItem>
                        <MenuItem value="Hospital">Hospital & Health Care</MenuItem>
                        <MenuItem value="HumanResources">Human Resources</MenuItem>
                        <MenuItem value="ImportExport">Import & Export</MenuItem>
                        <MenuItem value="InformationServices">Information Services</MenuItem>
                        <MenuItem value="Internet">Internet</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="MediaProduction">Media Production</MenuItem>
                        <MenuItem value="Music">Music</MenuItem>
                        <MenuItem value="Packaging">Packaging</MenuItem>
                        <MenuItem value="Pharmaceutical">Pharmaceuticals</MenuItem>
                        <MenuItem value="PoliticalOrganization">Political Organization</MenuItem>
                        <MenuItem value="Telecommunication">Telecommunication</MenuItem>
                        <MenuItem value="Textiles">Textiles</MenuItem>
                        <MenuItem value="Transportation">Transportation</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Postal Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                        fullWidth= {true}
                    />
                    <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Phone Number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        fullWidth= {true}
                    />
                    <TextField
                        id="standard-email-input"
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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        width: 200,
    },
  }));


export default FormCompanyDetails