import React, { Component } from 'react'
import { Button, List, ListItem, ListItemText, Divider, ButtonGroup } from '@material-ui/core'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        this.props.submmitToDb() //post to db
        this.props.nextStep()
        }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values: { companyName, sector, address, phone, email, firstName, lastName, occupation, governorate, password } } = this.props
        return (
            <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap:'wrap'}}>
                <h2 style={{alignSelf: 'center', zIndex: '2', flex: '1', opacity: '0.5'}}>Confirm Your Informations</h2>
                <div style={{display: 'flex', marginTop: '100px', flex: '1 1 16%'}}>
                <List>
                        <ListItem>
                            <ListItemText primary="Company Name: " secondary={companyName}/>
                        </ListItem> 
                        
                        <ListItem> 
                            <ListItemText primary="Activity Sector: " secondary= {sector}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Postal Address: " secondary= {address}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Phone Number: " secondary= {phone}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Email Address: " secondary= {email}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem> 
                                <ListItemText primary="First Name: " secondary= {firstName}/>
                        </ListItem>
                        <ListItem> 
                                <ListItemText primary="Last Name: " secondary= {lastName}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Occupation: " secondary= {occupation}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Governorate: " secondary= {governorate}/>
                        </ListItem>
                        <ListItem> 
                            <ListItemText primary="Password: " secondary= {password}/>
                        </ListItem>
                    </List>
                </div>
                <br/>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <ButtonGroup style={{marginTop: "20px"}} color="secondary" variant="contained">
                <Button variant="outlined" onClick={this.back} style={{backgroundColor: 'white', color: '#fdbb2d'}}>Back</Button>
                <Button onClick={this.continue} style={{color: 'white'}}>Confirm & Continue</Button>
            </ButtonGroup>
            </div>
        </div>
        )
    }
}

export default Confirm
