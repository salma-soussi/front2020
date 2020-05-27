import React, { Component } from 'react'
import { Paper, TextField, TableHead, Table, TableRow, TableBody, Button } from '@material-ui/core';
import { Link, withRouter } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from '../../Seller_Dashboard/components/RequestQuotation'
import { connect } from 'react-redux'
import axios from 'axios'
import backarrow from '../../img/backarrow.svg'
import accept from '../../img/accept.svg'
import decline from '../../img/decline.svg'
import { useStyles } from '../components/Main'
import Main from '../components/Main';
import RequestHeader from '../../Seller_Dashboard/dhasboard parts/Quotation_Common/RequestHeader';
import CustomerInfo from '../../Seller_Dashboard/dhasboard parts/Quotation_Common/CustomerInfo';
import Modal from 'react-awesome-modal';



class QuotationReceived extends Component {
    state = { 
        visible: false,
        visible2: false,
        status: 'Denied',
        seen: 'no',
        type: 'rejected',
        description1: '',
        content: 'Your Offer Has Been Denied '
    }
    
    openAcceptModal = () => {
        this.setState({
            visible2 : true
        });
    }
    closeModalAndConfirmAccept = () => {
        axios.post('http://localhost:3020/notification/accepted', {...this.state})
            .then(() => this.props.acceptednotifReducer({
                content: this.state.content === 'Your Offer Has Been Denied ' && 'Your Offer Has Been Accepted ',
                time: new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
                description1: this.state.description1,
                quotationNUM: this.state.quotationNUM,
                status: 'Sold',
                type: 'accepted',
                seen: 'no'
                })
            )
        axios.put(`http://localhost:3020/quotation/accepted-quotation/${this.props.reqID}`,{status: 'Sold'})
            .then(() => this.props.acceptQuotReducer({...this.state, status: 'Sold'}))
            
        if(window.location.pathname.split('/').length - 1 >= 2){
            var pathID = window.location.pathname.substr(-24)
            }
        this.props.history.push(`/buyer_dashboard/req-received/s/${pathID}`) //redirect to seller contacts info using his ID assign to it when he sign up, NEXT.
        this.setState({visible2: false}) 
    }
    closeModal = () => {
        this.setState({
            visible : false, visible2: false
        });
    }
    openModal = () => {
        this.setState({
            visible : true
        });
    }
 
    closeModalAndConfirm = () => {
        axios.post('http://localhost:3020/notification/denied', {...this.state})
                    .then(() => this.props.acceptednotifReducer({
                        content: this.state.content,
                        time: new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
                        description1: this.state.description1,
                        quotationNUM: this.state.quotationNUM,
                        status: 'Denied',
                        type: this.state.type,
                        seen: this.state.seen
                        })
                    )

        axios.put(`http://localhost:3020/quotation/denied-quotation/${this.props.reqID}`,{status: 'Denied'})
            .then(() => this.props.denyQuotReducer({...this.state, status: 'Denied'}))

        if(window.location.pathname.split('/').length - 1 >= 2){
            var pathID = window.location.pathname.substr(-24)
            }
        this.props.history.push(`/buyer_dashboard/req-received/s/${pathID}`)
        this.setState({visible : false})
    }

    goBack = () => {
        this.props.history.goBack()
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.receivedQuot.filter((el ,index) => el._id === this.props.reqID)[0], visible: false
        })
        axios.get(`http://localhost:3020/buyer/getByID/${this.props.buyerID}`)
            .then((res) => this.props.updateBuyer(res.data))
    }

    render() {
        const { reqID, receivedQuot } = this.props
        const quotFiltered = receivedQuot.filter((el, index) => el._id === this.props.reqID) // QUOT NEEDED
        // const handleChange = name => event => {
        //     this.setState({
        //         [name]: event.target.value,
        //     });
        // };
        // const classes = useStyles();

        return (
            <Main pageName={`Responding to the request quotation n°${quotFiltered.map(el => el.quotationNUM)}`}>
                <div className="navigation-buttons-req">
                    <Button button component={Link} onClick={() => this.goBack()} variant="contained" id="button-back" className={useStyles.button}>
                        <img src={backarrow} alt="reply page" style={{ width: '30px' }} />
                        <h5 style={{ marginLeft: '15px' }}>Back</h5>
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '22%' }}>
                        <Button onClick={this.openAcceptModal} id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                            <img src={accept} alt="reply page" style={{ width: '30px' }} />
                            <h5>Accept</h5>
                        </Button>
                        <Button onClick={this.openModal} id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                            <img src={decline} alt="reply page" style={{ width: '30px' }} />
                            <h5>Deny</h5>
                        </Button>
                    </div>
                {/* Deny Modal */}
                    <section>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <p style={{opacity: '.5'}}>Do you really want to refuse this offer? You will be unable to recover any data</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.closeModalAndConfirm}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                {/* Accept Modal */}
                    <section>
                        <Modal visible={this.state.visible2} width="400" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <p style={{opacity: '.5', textAlign: 'center'}}>Do you really want to accept this offre?
                                Once you accept it you will be redirected to the contact page, where you will find all the seller informations.</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.closeModalAndConfirmAccept}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                </div>
                <Paper className="paper-content">
                    <RequestHeader reqID={quotFiltered.map(el => el.quotationNUM)} date={this.state.date} until={this.state.validUntil}/>
                    <h3 className="customer-info">Customer Informations:</h3>
                    <CustomerInfo infos={this.props.buyersList}/>
                    <div className={useStyles.tableWrapper} style={{ marginTop: '20px' }}>
                        <TextField value={quotFiltered.map(el => el.comment)} fullWidth={true} variant="outlined" label="Comment" style={{marginBottom: "20px", pointerEvents: 'none'}}/>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>DESCRIPTION</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>QUANTITY</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>UNIT PRICE (TND)</StyledTableCell>
                                    <StyledTableCell style={{ backgroundColor: 'grey' }}>AMOUNT (TND)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {quotFiltered.map(x => x.details.map((el, i) => (
                                <TableBody>
                                    <StyledTableRow key={i}>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.description1}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.quantity1}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.u0s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.a5s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    {el.description2 !== '' ? <StyledTableRow key={i+1}>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.description2}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.quantity2}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.u1s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.a6s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                    {el.description3 !== '' ? <StyledTableRow key={i+2}>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.description3}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.quantity3}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.u2s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.a7s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                    {el.description4 !== '' ? <StyledTableRow key={i+3}>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.description4}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={el.quantity4}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.u3s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{pointerEvents: 'none'}} value={String(x.a8s).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
                                        </StyledTableCell>
                                    </StyledTableRow> : null}
                                </TableBody>
                            )))
                                
                            }
                            {quotFiltered.map(el => (
                            <TableBody>
                            <StyledTableRow>
                                <StyledTableCell rowSpan={3} />
                                <StyledTableCell colSpan={2}>Subtotal</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(el.subtotal).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px',pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Tax</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(el.tax).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px',pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell colSpan={2}>Total</StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        value={String(el.total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        style={{ fontSize: '5px',pointerEvents: 'none' }}
                                        fullWidth={true}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                            </TableBody>
                            )
                            )}
                        </Table>
                    </div>
                </Paper>
            </Main>
        )
    }
}
const mapStateToProps = state => {
    return {
        receivedQuot: state.reducerReqWaiting,
        buyersList: state.BuyerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        denyQuotReducer: quotResponse => {
            dispatch({
                type: 'DENY_QUOT',
                quotResponse
            })
        },
        acceptQuotReducer: quotResponse => {
            dispatch({
                type: 'ACCEPT_QUOT',
                quotResponse
            })
        },
        acceptednotifReducer: acceptednotif => {
            dispatch({
                type: 'ACCEPTED_NOTIF',
                acceptednotif
            })
        },
        updateBuyer: updated => {
            dispatch({
                type: 'UPDATE_USERS',
                updated
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuotationReceived));



