import React, { Component } from 'react'
import { Button, TextField, makeStyles, ButtonGroup, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core'
import SnackbarError from '../../SnackbarError'


export class FormPersonalDetails extends Component {
    state = { visible: false, errorText: '', error: false, repeatPassword: '' }
    continue = e => {
        if (this.props.values.firstName === '' || this.props.values.lastName === '' ||
            this.props.values.governorate === '' || this.props.values.occupation === '' || this.props.values.password === '') {
            this.setState({ visible: true });
            setTimeout(() => this.setState({ visible: false }), 4000)
            return e.preventDefault()

        } else {
            e.preventDefault()
            this.props.nextStep()
        }
    }
    onChange(event) {
        if (event.target.value === this.props.values.password) {
            this.setState({ errorText: '', error: false })
        } else {
            this.setState({ errorText: 'invalid password', error: true })
        }
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <h2 style={{ alignSelf: 'center', zIndex: '2', flex: '1', opacity: '0.5' }}>Personal Informations</h2>
                {this.state.visible ? <SnackbarError type={'error'} msg={'Fill in all the required fields!'} /> : null}
                <div style={{ marginTop: '100px', flex: '1 1 16%', display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="standard-name-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        fullWidth={true}
                    />
                    <TextField
                        id="standard-name-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        fullWidth={true}
                    />
                    <TextField
                        id="standard-name-input"
                        className={useStyles.textField}
                        margin="normal"
                        label="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        fullWidth={true}
                    />
                    {/* <TextField
                        id="standard-email-input"
                        className={useStyles.textField}
                        margin="normal"
                        label= "Governorate"
                        onChange={handleChange('governorate')}
                        defaultValue={values.governorate}
                        fullWidth={true}
                    /> */}

                    <FormControl className={useStyles.formControl}>
                        <InputLabel>Governorate</InputLabel>
                        <Select
                            fullWidth={true}
                            value={values.governorate}
                            onChange={handleChange('governorate')}
                        >
                            <MenuItem value='Ariana'>Ariana</MenuItem>
                            <MenuItem value='Béja'>Béja</MenuItem>
                            <MenuItem value='Ben Arous'>Ben Arous</MenuItem>
                            <MenuItem value='Bizerte'>Bizerte</MenuItem>
                            <MenuItem value='Gabès'>Gabès</MenuItem>
                            <MenuItem value='Gafsa'>Gafsa</MenuItem>
                            <MenuItem value='Jendouba'>Jendouba</MenuItem>
                            <MenuItem value='Kairouan'>Kairouan</MenuItem>
                            <MenuItem value='Kasserine'>Kasserine</MenuItem>
                            <MenuItem value='Kébili'>Kébili</MenuItem>
                            <MenuItem value='Le Kef'>Le Kef</MenuItem>
                            <MenuItem value='Mahdia'>Mahdia</MenuItem>
                            <MenuItem value='La Manouba'>La Manouba</MenuItem>
                            <MenuItem value='Médinin'>Médinin</MenuItem>
                            <MenuItem value='Monastir'>Monastir</MenuItem>
                            <MenuItem value='Nabeul'>Nabeul</MenuItem>
                            <MenuItem value='Sfax'>Sfax</MenuItem>
                            <MenuItem value='Sidi Bouzid'>Sidi Bouzid</MenuItem>
                            <MenuItem value='Siliana'>Siliana</MenuItem>
                            <MenuItem value='Sousse'>Sousse</MenuItem>
                            <MenuItem value='Tataouine'>Tataouine</MenuItem>
                            <MenuItem value='Tozeur'>Tozeur</MenuItem>
                            <MenuItem value='Tunis'>Tunis</MenuItem>
                            <MenuItem value='Zaghouan'>Zaghouan</MenuItem>
                        </Select>
                    </FormControl>

                    {/* <div style={{width: '100%'}}>
                        <Button
                            variant="contained"
                            onClick={this.continue}
                            color="secondary"
                            style={useStyles.button}
                            fullWidth={true}
                            >
                            Continue
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={this.back}
                            color="secondary"
                            style={useStyles.button}
                            fullWidth= {true}
                            >
                            Back
                        </Button>
                    </div> */}

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className={useStyles.textField}
                        margin="normal"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                        fullWidth={true}
                    />
                    <TextField
                        id="standard-password-input"
                        label="repeatPassword"
                        type="password"
                        autoComplete="current-password"
                        className={useStyles.textField}
                        margin="normal"
                        onChange={this.onChange.bind(this)}
                        helperText={this.state.errorText}
                        error={this.state.error}
                        onChange={this.onChange.bind(this)}
                        defaultValue={this.state.repeatPassword}
                        fullWidth={true}
                    />
                    <ButtonGroup fullWidth style={{ marginTop: "20px" }} color="secondary" variant="contained">
                        <Button variant="outlined" onClick={this.back} style={{ backgroundColor: 'white', color: '#fdbb2d' }}>Back</Button>
                        <Button onClick={this.continue} style={{ color: 'white' }}>Continue</Button>
                    </ButtonGroup>
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


export default FormPersonalDetails
