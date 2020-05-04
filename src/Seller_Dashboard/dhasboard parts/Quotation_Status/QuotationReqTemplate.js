import React, { Component } from 'react'
import { Paper, TextField, makeStyles, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from 'axios'
import backarrow from '../../../img/backarrow.svg'
import { StyledTableCell, StyledTableRow } from '../../components/RequestQuotation'
import reply from '../../../img/reply.svg'
import Main from '../../components/Main';
import CustomerInfo from '../Quotation_Common/CustomerInfo';
import RequestHeader from '../Quotation_Common/RequestHeader';


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

class QuotationReqTemplate extends Component {
    state = {  }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.requestsList.filter((el ,index) => el._id === this.props.reqID)[0]
        })
        axios.get(`/seller/seller/${this.props.sellerID}`)
            .then((res) => this.props.updateSeller(res.data))
    }
    render(){
        if(window.location.pathname.split('/').length - 1 >= 2){
            var pathID = window.location.pathname.substr(-24)
        }
        const { reqID, status, requestsList } = this.props
        const requestListFiltered = requestsList.filter((el ,index) => el._id === this.props.reqID)
  

        return (
        <Main pageName={'Quotation Requests'}>
            <div className="navigation-buttons-req">
                <Button button component={Link} to={`/seller_dashboard/o/req-quotations/${pathID}`} variant="contained" id="button-back" className={useStyles.button}>
                    <img src={backarrow} alt="reply page" style={{width: '30px'}}/>
                    <h5>All requests</h5>
                </Button>
                <Button id="btn-reply" button component={Link} to={`/seller_dashboard/req-quotations/${reqID}/${status}/quotation-form/${pathID}`} disabled={status === 'Waiting' ? false : true} variant="contained" color="primary" className={useStyles.button}>
                    <img src={reply} alt="reply page" style={{transform: 'scale(-1, 1)', width: '30px'}}/>
                    <h5>reply</h5>
                </Button>
            </div>
            <Paper className="paper-content">
                <RequestHeader reqID={requestListFiltered.map(el => el.quotationNum)} date={this.state.date} until={this.state.validUntil}/>
                <h3 className="customer-info">Customer Informations:</h3>
                <CustomerInfo infos={this.props.sellersList}/>
                <div className={useStyles.tableWrapper} style={{marginTop: '20px'}}>
                    <TextField value={requestListFiltered.map(el => el.comment)} fullWidth={true} variant="outlined" label="Comment" style={{marginBottom: "20px", pointerEvents: 'none'}}/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>DESCRIPTION</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: 'grey'}}>QUANTITY</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        
                            {/* {requestInformations.map((el, index) =>( */}
                                {requestsList.filter((el ,index) => el._id === this.props.reqID).map((el, index) => (
                                    el.details.map(x => (
                                    <TableBody>
                                        <StyledTableRow key={index}>
                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField style={{fontSize: '5px'}} fullWidth={true} name="description" onChange={this.handleChange} value={x.description1}/>
                                            </StyledTableCell> : null}
                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField type="number" name="quantity" onChange={this.handleChange} value={x.quantity1}/>
                                            </StyledTableCell> : null}
                                        </StyledTableRow>
                                        {x.description2 !== '' ? <StyledTableRow key={index+1}>
                                            <StyledTableCell>
                                                <TextField style={{fontSize: '5px'}} fullWidth={true} name="description" onChange={this.handleChange} value={x.description2}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <TextField type="number" name="quantity" onChange={this.handleChange} value={x.quantity2}/>
                                            </StyledTableCell>
                                        </StyledTableRow> : null }
                                        {x.description3 !== '' ? <StyledTableRow key={index+2}>
                                            <StyledTableCell>
                                                <TextField style={{fontSize: '5px'}} fullWidth={true} name="description" onChange={this.handleChange} value={x.description3}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <TextField type="number" name="quantity" onChange={this.handleChange} value={x.quantity3}/>
                                            </StyledTableCell>
                                        </StyledTableRow> : null}
                                        {x.description4 !== '' ? <StyledTableRow key={index+3}>
                                            <StyledTableCell>
                                                <TextField style={{fontSize: '5px'}} fullWidth={true} name="description" onChange={this.handleChange} value={x.description4}/>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <TextField type="number" name="quantity" onChange={this.handleChange} value={x.quantity4}/>
                                            </StyledTableCell>
                                        </StyledTableRow> : null}
                                    </TableBody>
                                    ))

                                ))}
                            {/* //     )
                            //     )
                            // } */}
                        
                    </Table>
                </div>
            </Paper>
        </Main>
    )
}
}
const mapStateToProps = state => {
    return{
        requestsList: state.reducerReqWaiting,
        sellersList: state.SellerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateSeller: updated => {
            dispatch({
                type: 'UPDATE_SELLERS',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuotationReqTemplate);
