import React, { Component } from 'react'
import { Paper, TextField, makeStyles, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import backarrow from '../../img/backarrow.svg'
import { StyledTableCell, StyledTableRow } from '../../Seller_Dashboard/components/RequestQuotation'
import Main from '../components/Main';
import RequestHeader from '../../Seller_Dashboard/dhasboard parts/Quotation_Common/RequestHeader';
import CustomerInfo from '../../Seller_Dashboard/dhasboard parts/Quotation_Common/CustomerInfo';


export const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'auto',
    },
    table: {
        minWidth: 700,
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));


class QuotationSent extends Component {
    constructor(props) {
        super(props);
        this.state={
            gov: ''
        }
    }
    goBack = () => {
        this.props.history.goBack()
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.requestsSent.filter((el ,index) => el._id === this.props.reqID)[0]
           
        })
        axios.get(`http://localhost:3020/buyer/getByID/${this.props.buyerID}`)
            .then((res) => this.props.updateBuyer(res.data))
    }
    
    render(){
        const { reqID, requestsSent } = this.props
        const requestsSentFiltered = requestsSent.filter((el ,index) => el._id === this.props.reqID)
        // const classes = useStyles();
        // const handleChange = name => event => {
        //     this.setState({
        //       [name]: event.target.value,
        //     });
        //   };

        return (
        <Main pageName={'Quotation Requests'}>
            <div className="navigation-buttons-req">
                <Button button component={Link} onClick={() => this.goBack()} variant="contained" id="button-back" className={useStyles.button}>
                    <img src={backarrow} alt="reply page" style={{width: '30px'}}/>
                    <h5 style={{marginLeft: '15px'}}>Back</h5>
                </Button>
            </div>
            <Paper className="paper-content">
                <RequestHeader reqID={requestsSentFiltered.map(el => el.quotationNUM)} date={this.state.date} until={this.state.validUntil}/>
                <h3 className="customer-info">Customer Informations:</h3>
                <CustomerInfo infos={this.props.buyersList}/>
                <div className={useStyles.tableWrapper} style={{marginTop: '20px'}}>
                    <TextField value={requestsSentFiltered.map(el => el.comment)} fullWidth={true} variant="outlined" label="Comment" style={{marginBottom: "20px", pointerEvents: 'none'}}/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>DESCRIPTION</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>QUANTITY</StyledTableCell>
                            </TableRow>
                        </TableHead>
                            {requestsSentFiltered.map((x, i) => x.details.map((el, index) => (
                            <TableBody>
                                <StyledTableRow key={index}>
                                    <StyledTableCell>
                                        <TextField style={{fontSize: '5px', pointerEvents: 'none'}} fullWidth={true} value={el.description1}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} type="number" value={el.quantity1}/>
                                    </StyledTableCell>
                                </StyledTableRow>
                            {el.description2 !== '' ? <StyledTableRow key={index+1}>
                                    <StyledTableCell>
                                        <TextField style={{fontSize: '5px', pointerEvents: 'none'}} fullWidth={true} value={el.description2}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} type="number" value={el.quantity2}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                            {el.description3 !== '' ? <StyledTableRow key={index+2}>
                                    <StyledTableCell>
                                        <TextField style={{fontSize: '5px', pointerEvents: 'none'}} fullWidth={true} value={el.description3}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} type="number" value={el.quantity3}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                            {el.description4 !== '' ? <StyledTableRow key={index+3}>
                                    <StyledTableCell>
                                        <TextField style={{fontSize: '5px', pointerEvents: 'none'}} fullWidth={true} value={el.description4}/>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField style={{pointerEvents: 'none'}} type="number" value={el.quantity4}/>
                                    </StyledTableCell>
                                </StyledTableRow> : null}
                            
                            </TableBody>
                            )
                                ))
                            }
                    </Table>
                </div>
            </Paper>
        </Main>
    )
}
}

const mapStateToProps = state => {
    return{
        requestsSent: state.reducerReqWaiting,
        buyersList: state.BuyerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBuyer: updated => {
            dispatch({
                type: 'UPDATE_USERS',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuotationSent));
