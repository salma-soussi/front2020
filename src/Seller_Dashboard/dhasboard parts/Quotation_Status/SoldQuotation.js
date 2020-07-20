import React, { Component } from 'react'
import { Paper, TextField, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import axios from 'axios'
import { StyledTableCell, StyledTableRow } from '../../components/RequestQuotation'
import backarrow from '../../../img/backarrow.svg'
import send from '../../../img/send.svg'
import dealdone from '../../../img/dealdone.svg'
import { useStyles } from './QuotationForm'

import Main from '../../components/Main';
import RequestHeader from '../Quotation_Common/RequestHeader';
import CustomerInfo from '../Quotation_Common/CustomerInfo';



class SoldQuotation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gov: ''
        }
    }
    goBack = () => {
        this.props.history.goBack()
    }

    buttonText = () => {
        if (this.props.history.location.pathname === `/seller_dashboard/req-quotations/${this.props.reqID}/Sold`) {
            return "All Quotations"
        } else {
            return "Sold Items"
        }
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.soldQuots.filter((el, index) => el._id === this.props.reqID)[0]
        })
        axios.get(`http://localhost:3020/seller/getByID/${this.props.sellerID}`)
            .then((res) => this.props.updateSeller(res.data))

    }
    render() {
        const { reqID, soldQuots } = this.props
        const soldQuotsFiltered = soldQuots.filter((el, index) => el._id === this.props.reqID)

        return (
            <Main pageName={`Deal N°${soldQuotsFiltered.map(el => el.quotationNUM)}`}>
                <div className="navigation-buttons-req">
                    <Button button component={Link} onClick={() => this.goBack()} variant="contained" id="button-back" className={useStyles.button}>
                        <img src={backarrow} alt="reply page" style={{ width: '30px' }} />
                        <h5>{this.buttonText()}</h5>
                    </Button>
                    <Button disabled id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                        <img src={send} alt="reply page" style={{ width: '30px' }} />
                        <h5>Send</h5>
                    </Button>
                </div>
                <Paper className="paper-content">
                    <RequestHeader reqID={soldQuotsFiltered.map(el => el.quotationNUM)} date={this.state.date} until={this.state.validUntil} />
                    <div className="sold-done-deal">
                        <h1 className="done-deal">DONE DEAL</h1>
                        <img src={dealdone} alt="deal is done" />
                    </div>
                    <h3 className="customer-info">Customer Informations:</h3>
                    <CustomerInfo infos={this.props.sellersList} />
                    <div className={useStyles.tableWrapper} style={{ marginTop: '20px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>NAME</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>DESCRIPTION</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>QUANTITY</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>FACT SHEET</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>UNIT PRICE (TND)</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>AMOUNT (TND)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {soldQuotsFiltered.map((x, i) => x.details.map(elem => (
                                <TableBody>
                                    <StyledTableRow key={i}>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.name1} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} multiline value={elem.description1} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.quantity1} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                        <a href={x.file1 !== "" ? `http://localhost:3020/quotation/getFile1/${x.file1}` : "http://www.google.com"} target="_blank">
                                                <Button variant="contained" color="secondary" component="span" >
                                                    F.S
                                            </Button>
                                            </a>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.unitPrice1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.totalPrice1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    {elem.name2 !== '' ? <StyledTableRow key={i + 1}>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.name2} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} multiline value={elem.description2} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.quantity2} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                        <a href={x.file2 !== "" ? `http://localhost:3020/quotation/getFile2/${x.file2}` : "http://www.google.com"} target="_blank">
                                                <Button variant="contained" color="secondary" component="span" >
                                                    F.S
                                            </Button>
                                            </a>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.unitPrice2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.totalPrice2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                    {elem.name3 !== '' ? <StyledTableRow key={i + 2}>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.name3} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} multiline value={elem.description3} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.quantity3} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                        <a href={x.file3 !== "" ? `http://localhost:3020/quotation/getFile3/${x.file3}` : "http://www.google.com"} target="_blank">
                                                <Button variant="contained" color="secondary" component="span" >
                                                    F.S
                                            </Button>
                                            </a>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.unitPrice3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.totalPrice3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                    {elem.name4 !== '' ? <StyledTableRow key={i + 3}>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.name4} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} multiline value={elem.description4} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={elem.quantity4} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                        <a href={x.file4 !== "" ? `http://localhost:3020/quotation/getFile4/${x.file4}` : "http://www.google.com"} target="_blank">
                                                <Button variant="contained" color="secondary" component="span" >
                                                    F.S
                                            </Button>
                                            </a>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.unitPrice4).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ pointerEvents: 'none' }} value={String(x.totalPrice4).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                </TableBody>
                            ))
                            )}
                            <StyledTableRow>
                                <StyledTableCell rowSpan={3} />
                                <StyledTableCell rowSpan={3} />
                                <StyledTableCell rowSpan={3} />
                                <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(this.state.subtotal).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px', pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Tax (%)</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(this.state.tax).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px', pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Total</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(this.state.total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px', pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        </Table>
                    </div>
                </Paper>
            </Main>
        )
    }
}
const mapStateToProps = state => {
    return {
        soldQuots: state.reducerReqWaiting,
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SoldQuotation));
