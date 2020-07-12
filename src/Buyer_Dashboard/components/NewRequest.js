import React, { Component } from 'react'
import { Paper , TextField, Button, Table, TableHead, TableRow, TableBody ,InputLabel ,FormControl,Select,MenuItem } from '@material-ui/core'

import { useStyles } from './Main'
import { connect } from 'react-redux'
import axios from 'axios'
import Main from './Main'
import calendar from '../../img/calendar.svg'
import reply from '../../img/reply.svg'
import { StyledTableCell, StyledTableRow } from '../../Seller_Dashboard/components/RequestQuotation'
import CustomerInfo from '../../Seller_Dashboard/dhasboard parts/Quotation_Common/CustomerInfo';
import Modal from 'react-awesome-modal';
import SnackbarError from '../../SnackbarError';



export class NewRequest extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            companyName: '',
            firstName: '',
            lastName: '',
            status: 'Waiting',
            name1: '',
            description1: '',
            quantity1: '',
            name2: '',
            description2: '',
            quantity2: '',
            name3: '',
            description3: '',
            quantity3: '',
            name4: '',
            description4: '',
            quantity4: '',
            date: new Date(),
            validUntil: '',
            comment: '',
            quotationNUM: String(Math.round(Math.random() * 1000000)),
            customerID: String(Math.round(Math.random() * 1000000)),
            content: 'Someone is Looking for ',
            type: 'new',
            seen: 'no',
            visible: false,
            showError: false,
            showSuccess: false,
            
        }
    }
 
    componentDidMount() {
        axios.get(`http://localhost:3020/buyer/getByID/${this.props.buyerID}`)
            .then((res) => this.props.updateBuyer(res.data))
        this.setState({
            companyName: this.props.buyersList.companyName,
            firstName: this.props.buyersList.firstName,
            lastName: this.props.buyersList.lastName
        });
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
        if ((this.state.description1 === '' && this.state.quantity1 === '' && this.state.name1 === '' &&
            this.state.description2 === '' && this.state.quantity2 === '' && this.state.name2 === '' &&
            this.state.description3 === '' && this.state.quantity3 === '' && this.state.name3 === '' &&
            this.state.description4 === '' && this.state.quantity4 === '' && this.state.name4 === '') ||
            ((this.state.description1 !== '' && this.state.quantity1 === '' && this.state.name1 === '') ||
                (this.state.description2 !== '' && this.state.quantity2 === '' && this.state.name2 === '') ||
                (this.state.description3 !== '' && this.state.quantity3 === '' && this.state.name3 === '') ||
                (this.state.description4 !== '' && this.state.quantity4 === '' && this.state.name4 === '')) ||
            ((this.state.description1 === '' && this.state.quantity1 !== '' && this.state.name1 === '') ||
                (this.state.description2 === '' && this.state.quantity2 !== '' && this.state.name2 === '') ||
                (this.state.description3 === '' && this.state.quantity3 !== '' && this.state.name3 === '') ||
                (this.state.description4 === '' && this.state.quantity4 !== '' && this.state.name4 === '')) ||
            ((this.state.description1 === '' && this.state.quantity1 === '' && this.state.name1 !== '') ||
                (this.state.description2 === '' && this.state.quantity2 === '' && this.state.name2 !== '') ||
                (this.state.description3 === '' && this.state.quantity3 === '' && this.state.name3 !== '') ||
                (this.state.description4 === '' && this.state.quantity4 === '' && this.state.name4 !== ''))
        ) {
            this.setState({ showError: true })
            setTimeout(() => this.setState({ showError: false }), 4000)
        } else {

            const d1 = this.state.description1;
            const n1 = this.state.name1;
            const q1 = this.state.quantity1;
            const d2 = this.state.description2;
            const n2 = this.state.name2;
            const q2 = this.state.quantity2;
            const d3 = this.state.description3;
            const n3 = this.state.name3;
            const q3 = this.state.quantity3;
            const d4 = this.state.description4;
            const n4 = this.state.name3;
            const q4 = this.state.quantity4;

            axios.post('http://localhost:3020/quotation/add', { ...this.state })
                .then((res) => {
                    this.props.newRequest({
                        quotationNUM: this.state.quotationNUM,
                        companyName: this.state.companyName,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        customerID: this.state.customerID,
                        comment: this.state.comment,
                        date: this.state.date,
                        validUntil: String(this.state.validUntil),
                        status: this.state.status,
                        description1: this.state.description1,
                        description2: this.state.description2,
                        description3: this.state.description3,
                        description4: this.state.description4,
                        quantity1: this.state.quantity1,
                        quantity2: this.state.quantity2,
                        quantity3: this.state.quantity3,
                        quantity4: this.state.quantity4,
                        name1: this.state.name1,
                        name2: this.state.name2,
                        name3: this.state.name3,
                        name4: this.state.name4,
                    })
                    console.log(res)
                    axios.put(`http://localhost:3020/quotation/push/${res.data._id}`, {
                        name1: n1,
                        name2: n2,
                        name3: n3,
                        name4: n4,
                        description1: d1,
                        description2: d2,
                        description3: d3,
                        description4: d4,
                        quantity1: q1,
                        quantity2: q2,
                        quantity3: q3,
                        quantity4: q4,
                    })
                }
                )

            console.log("this.props", this.state);


            this.setState({ showSuccess: true });
            setTimeout(() => this.setState({ showSuccess: false }), 4000)

            axios.post('http://localhost:3020/notification/add', { ...this.state })
                .then(() => this.props.newNotif({
                    content: this.state.content,
                    time: new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()),
                    name1: this.state.name1,
                    description1: this.state.description1,
                    quotationNUM: this.state.quotationNUM,
                    status: this.state.status,
                    type: this.state.type,
                    seen: this.state.seen
                })
                )

        }


        this.setState({ description1: '', description2: '', description3: '', description4: '',name1: '', name2: '', name3: '', name4: '', quantity1: '', quantity2: '', quantity3: '', quantity4: '', date: '', until: '', comment: '' })
        this.setState({ visible: false });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    render() {
        let sector = this.props.buyersList.sector
        const minDate = new Date(Date.now());
        return (
            <Main pageName={'New Request'}>
                {this.state.showError ? <SnackbarError type={'error'} msg={'You forgot to add quantity or description!'} /> : null}
                {this.state.showSuccess ? <SnackbarError type={'success'} msg={'Request Sent Successfully!'} /> : null}
                <div className="navigation-buttons-req">
                    <Button onClick={this.openModal} id="btn-reply" variant="contained" color="primary" className={useStyles.button}>
                        <img src={reply} alt="reply page" style={{ transform: 'scale(-1, 1)', width: '30px' }} />
                        <h5>Send</h5>
                    </Button>
                    {/* Modal */}
                    <section>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAway={this.closeModal}>
                            <div className="modal-wrapper">
                                <h1>CONFIRMATION</h1>
                                <p style={{ opacity: '.5' }}>Are you sure you want to send this request ?</p>
                                <div className="buttons-modal">
                                    <a href="javascript:void(0);" className="cancel-btn" onClick={this.closeModal}>Cancel</a>
                                    <a href="javascript:void(0);" className="confirm-btn" onClick={this.closeModalAndConfirm}>Confirm</a>
                                </div>
                            </div>
                        </Modal>
                    </section>
                </div>
                <Paper className="req-header">
                    <h1 className="page-title" style={{ margin: '10px' }}>New Quotation Request</h1>
                    <div className="dates" style={{ margin: '10px' }}>
                   
                        <div className="icon-and-input">
                            <img src={calendar} className="icons-req" alt="calendar icon, date of the request" />
                            <TextField
                                value={new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}
                                style={{ pointerEvents: 'none' }}
                                label="Today"
                                variant="outlined"
                                className={useStyles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="icon-and-input" style={{ marginTop: '15px' }}>
                            <img src={calendar} className="icons-req" alt="calendar icon, date of validation" />
                            <TextField
                                name="validUntil"
                                value={this.state.validUntil}
                                onChange={this.handleChange}
                                id="date"
                                label="Valid Until"
                                type="date"
                                variant="outlined"
                                
                                className={useStyles.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </div>
                        
                    </div>
                    <div className="paper-content">
                        <h3 className="customer-info">Customer Informations:</h3>
                        <CustomerInfo infos={this.props.buyersList} />
                        <div className={useStyles.tableWrapper} style={{ marginTop: '20px' }}>
                          
                            <FormControl fullWidth={true} className={useStyles.tableWrapper} style={{ marginBottom: '20px' }}>
                                <InputLabel className="page-title" id="demo-simple-select-placeholder-label-label">
                                sector
                                </InputLabel>
                                
                                <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                
                                displayEmpty
                                className={useStyles.selectEmpty}
                                fullWidth={true}
                                name="sector"
                                value={sector}
                                >
                                    <MenuItem value="beaute">beauté</MenuItem>
                                    <MenuItem value="electronique">électronique</MenuItem>
                                    <MenuItem value="fourniture">fourniture</MenuItem>
                                    <MenuItem value="informatique">informatique</MenuItem>
                                    <MenuItem value="mode">mode</MenuItem>
                                    <MenuItem value="sport">sport</MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            
                            <TextField fullWidth={true} variant="outlined" label="Comment (Optional)" style={{ marginBottom: '20px' }} onChange={this.handleChange} value={this.state.comment} name="comment" type="text" />
                            <br />
                            <Table id='tableDescriptions'>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{ backgroundColor: 'grey' }}>NAME</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: 'grey' }}>DESCRIPTION</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: 'grey' }}>QUANTITY</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Name 1"
                                                name="name1"
                                                value={this.state.name1}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 1"
                                                name="description1"
                                                value={this.state.description1}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity1"
                                                label="Quantity 1"
                                                value={this.state.quantity1 < 0 ? 0 : this.state.quantity1}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Name 2"
                                                name="name2"
                                                value={this.state.name2}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 2"
                                                name="description2"
                                                value={this.state.description2}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity2"
                                                label="Quantity 2"
                                                value={this.state.quantity2 < 0 ? 0 : this.state.quantity2}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Name 3"
                                                name="name3"
                                                value={this.state.name3}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 3"
                                                name="description3"
                                                value={this.state.description3}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity3"
                                                label="Quantity 3"
                                                value={this.state.quantity3 < 0 ? 0 : this.state.quantity3}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            <TextField
                                                style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Name 4"
                                                name="name4"
                                                value={this.state.name4}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField style={{ fontSize: '5px' }}
                                                fullWidth={true}
                                                label="Description 4"
                                                name="description4"
                                                value={this.state.description4}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <TextField
                                                type="number"
                                                name="quantity4"
                                                label="Quantity 4"
                                                value={this.state.quantity4 < 0 ? 0 : this.state.quantity4}
                                                onChange={this.handleChange}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Paper>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        request: state.reducerReqWaiting,
        buyersList: state.BuyerReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newRequest: payload => {
            dispatch({
                type: 'CREATE_REQ',
                payload
            })
        },
        newNotif: newnotif => {
            dispatch({
                type: 'NEW_NOTIF',
                newnotif
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
export default connect(mapStateToProps, mapDispatchToProps)(NewRequest)
