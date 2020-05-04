import React, { Component } from 'react'
import { TextField, makeStyles } from '@material-ui/core';
import calendar from '../../../img/calendar.svg'
// import { useStyles } from '../Quotation_Status/QuotationReqTemplate'


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: '0',
    },
}))

export class RequestHeader extends Component {
    render() {
        const { reqID, date, until } = this.props
        return (
            <div className="req-header">
                <h1 className="page-title">Quotation Request N°{`${reqID}`}</h1>
                <div className="dates">
                    <div className="icon-and-input">
                        <img src={calendar} className="icons-req" alt="calendar icon, date of the request"/>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label style={{opacity: '.5'}}>Date:</label>
                            <TextField
                                id="outlined-disabled"
                                // label="Date"
                                style={{marginTop: '0'}}
                                disabled
                                className={useStyles.textField}
                                value={String(date).slice(0, 10)}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>    
                    </div>
                    <div className="icon-and-input">
                        <img src={calendar} className="icons-req" alt="calendar icon, date of validation"/>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label style={{opacity: '.5'}}>Valid Until:</label>
                            <TextField
                                id="outlined-name"
                                // label="Valid Until"
                                disabled
                                style={{marginTop: '0'}}
                                className={useStyles.textField}
                                value={String(until).slice(0, 10)}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestHeader
