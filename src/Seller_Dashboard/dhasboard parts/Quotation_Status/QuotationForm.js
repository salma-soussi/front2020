import React, { Component } from 'react'
import { Paper, TextField, makeStyles, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import { StyledTableCell, StyledTableRow } from '../../components/RequestQuotation'
import backarrow from '../../../img/backarrow.svg'
import send from '../../../img/send.svg'
import Main from '../../components/Main';
import CustomerInfo from '../Quotation_Common/CustomerInfo';
import RequestHeader from '../Quotation_Common/RequestHeader';
import Modal from 'react-awesome-modal';

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



class QuotationForm extends Component {
    state = {
        visible: false,
        status: 'Answered',
        seen: 'no',
        type: 'response',
        description1: '',
        name1: '',
        content: 'A response received '

    }
    openModal = () => {
        this.setState({
            visible: true
        });
    }

    closeModal = () => {
        this.setState({
            visible: false
        });
    }
    closeModalAndConfirm = () => {
        axios.put(`http://localhost:3020/quotation/update/${this.props.reqID}`, {
            status: 'Answered',
            unitPrice1: this.state.unitPrice1,
            unitPrice2: this.state.unitPrice2,
            unitPrice3: this.state.unitPrice3,
            unitPrice4: this.state.unitPrice4,
            totalPrice1: this.state.totalPrice1,
            totalPrice2: this.state.totalPrice2,
            totalPrice3: this.state.totalPrice3,
            totalPrice4: this.state.totalPrice4,
            total: this.state.total,
            tax: this.state.tax,
            subtotal: this.state.subtotal
        })
            .then(() => this.props.updateStatusReducer(this.state))

        // console.log({...this.state})
        axios.post('http://localhost:3020/notification/accepted', { ...this.state })
            .then(() => this.props.answeredNotifReducer({
                content: this.state.content,
                time: new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()),
                description1: this.state.description1,
                name1: this.state.name1,
                quotationNUM: this.state.quotationNUM,
                status: 'Answered',
                type: this.state.type,
                seen: this.state.seen
            })
            )
        if (window.location.pathname.split('/').length - 1 >= 2) {
            var pathID = window.location.pathname.substr(-24)
        }
        this.props.history.push(`/seller_dashboard/o/req-quotations/${pathID}`)
        this.setState({ visible: false });
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.requestsList.filter((el, index) => el._id === this.props.reqID)[0]
        })
        axios.get(`http://localhost:3020/seller/getByID/${this.props.sellerID}`)
            .then((res) => this.props.updateSeller(res.data))
    }

    render() {
        if (window.location.pathname.split('/').length - 1 >= 2) {
            var pathID = window.location.pathname.substr(-24)
        }
        const { reqID, status, requestsList } = this.props
        const requestListFiltered = requestsList.filter((el, index) => el._id === this.props.reqID && el.status === 'Waiting')

        if (window.location.pathname.split('/').length - 1 >= 2) {
            var pathID = window.location.pathname.substr(-24)
        }
        return (
            <Main pageName={`Responding to the request quotation n°${requestListFiltered.map(el => el.quotationNUM)}`}>
                <div className="navigation-buttons-req">
                    <Button button component={Link} to={`/seller_dashboard/req-quotations/${reqID}/${status}/${pathID}`} variant="contained" id="button-back" className={useStyles.button}>
                        <img src={backarrow} alt="reply page" style={{ width: '30px' }} />
                        <h5>Quotation</h5>
                    </Button>
                    <Button onClick={this.openModal} id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                        <img src={send} alt="reply page" style={{ width: '30px' }} />
                        <h5>Send</h5>
                    </Button>
                    {/* MODAL */}
                    <section>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <p style={{ opacity: '.5' }}>Are you sure you want to send this response ?</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.closeModalAndConfirm}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                </div>
                <Paper className="paper-content">
                    <RequestHeader reqID={requestListFiltered.map(el => el.quotationNUM)} date={this.state.date} until={this.state.validUntil} />
                    <h3 className="customer-info">Customer Informations:</h3>
                    <CustomerInfo infos={this.props.sellersList} />
                    <div className={useStyles.tableWrapper} style={{ marginTop: '20px' }}>
                        <TextField value={requestListFiltered.map(el => el.comment)} fullWidth={true} variant="outlined" label="Comment" style={{ marginBottom: "20px", pointerEvents: 'none' }} />
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

                            {requestsList.filter((el, index) => el._id === this.props.reqID && el.status === 'Waiting').map((el, index) => (
                                el.details.map((x, i) => (
                                    <TableBody>
                                        <StyledTableRow key={index}>
                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField style={{ fontSize: '5px' }} disabled fullWidth={true} value={x.name1} />
                                            </StyledTableCell> : null}

                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField style={{ fontSize: '5px' }} multiline disabled fullWidth={true} value={x.description1} />
                                            </StyledTableCell> : null}

                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField disabled type="number" value={x.quantity1} />
                                            </StyledTableCell> : null}
                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <input
                                                accept="image/*"
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                                style={{  display: 'none' }}
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span">
                                                Upload
                                                </Button>
                                            </label>
                                            </StyledTableCell> : null}
                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField type="number" placeholder="Price/unit (TND)"
                                                    name='unitPrice1'
                                                    // value={this.state.index}
                                                    // value={x.unit}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell> : null}

                                            {Object.keys(x).length >= 3 ? <StyledTableCell>
                                                <TextField type="number" placeholder="Amount (TND)"
                                                    // name="amount" 
                                                    name='totalPrice1'
                                                    // value={x.amount}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell> : null}
                                        </StyledTableRow>
                                        {x.name2 !== '' ? <StyledTableRow key={index + 1}>
                                            <StyledTableCell>
                                                <TextField style={{ fontSize: '5px' }} disabled fullWidth={true} value={x.name2} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" multiline value={x.description2} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" value={x.quantity2} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Price/unit (TND)"
                                                    name='unitPrice2'
                                                    // value={this.state.index}
                                                    // value={x.unit}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Amount (TND)"
                                                    // name="amount" 
                                                    name='totalPrice2'
                                                    // value={x.amount}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>
                                        </StyledTableRow> : null}
                                        {x.name3 !== '' ? <StyledTableRow key={index + 2}>
                                            <StyledTableCell>
                                                <TextField style={{ fontSize: '5px' }} disabled fullWidth={true} value={x.name3} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" multiline value={x.description3} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" value={x.quantity3} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Price/unit (TND)"
                                                    name='unitPrice3'
                                                    // value={this.state.index}
                                                    // value={x.unit}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Amount (TND)"
                                                    // name="amount" 
                                                    name='totalPrice3'
                                                    // value={x.amount}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>
                                        </StyledTableRow> : null}
                                        {x.name4 !== '' ? <StyledTableRow key={index + 3}>
                                            <StyledTableCell>
                                                <TextField style={{ fontSize: '5px' }} disabled fullWidth={true} value={x.name4} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" multiline value={x.description4} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField disabled type="number" value={x.quantity4} />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Price/unit (TND)"
                                                    name='unitPrice4'
                                                    // value={this.state.index}
                                                    // value={x.unit}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <TextField type="number" placeholder="Amount (TND)"
                                                    // name="amount" 
                                                    name='totalPrice4'
                                                    // value={x.amount}
                                                    onChange={this.handleChange}
                                                />
                                            </StyledTableCell>
                                        </StyledTableRow> : null}
                                    </TableBody>
                                ))

                            ))}
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell rowSpan={3} />
                                    <StyledTableCell rowSpan={3} />
                                    <StyledTableCell rowSpan={3} />
                                    <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            onChange={this.handleChange}
                                            type="number" value={this.state.subtotal < 0 ? 0 : this.state.subtotal}
                                            style={{ fontSize: '5px' }}
                                            name="subtotal"
                                            placeholder="Subtotal"
                                            fullWidth={true}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell colSpan={2}>Tax</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            onChange={this.handleChange}
                                            type="number"
                                            value={this.state.tax < 0 ? 0 : this.state.tax}
                                            style={{ fontSize: '5px' }}
                                            name="tax"
                                            placeholder="Tax"
                                            fullWidth={true}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell colSpan={2}>Total</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            onChange={this.handleChange}
                                            type="number"
                                            value={this.state.total < 0 ? 0 : this.state.total}
                                            style={{ fontSize: '5px' }}
                                            name="total"
                                            placeholder="Total"
                                            fullWidth={true}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </Main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        requestsList: state.reducerReqWaiting,
        sellersList: state.SellerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStatusReducer: quotreq => {
            dispatch({
                type: 'UPDATE_TO_ANSWERED',
                quotreq
            })
        },
        answeredNotifReducer: answerednotif => {
            dispatch({
                type: 'ANSWERED_NOTIF',
                answerednotif
            })
        },
        updateSeller: updated => {
            dispatch({
                type: 'UPDATE_SELLERS',
                updated
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuotationForm));
