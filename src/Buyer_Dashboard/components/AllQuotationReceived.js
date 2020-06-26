import React, { Component } from 'react'
import { TablePagination, TableFooter, Paper, TableRow, TableHead, TableBody, Table, Divider, TextField, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import {StyledTableCell, StyledTableRow, TablePaginationActions} from './AllQuotationSent'
import { useStyles } from './Main'
import Main from './Main'


// ********************         REQUEST QUOTATION COMPONENT
class AllQuotationReceived extends Component {
    constructor(props) {
        super(props);
        this.state={
            page: 0,
            rowsPerPage: 5,
            keyword: ''
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({page: newPage})
    }
    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: parseInt(event.target.value, 10)})
        this.setState({ page: 0 })
    }
    handleChangeSearch = (event) => {
        this.setState({keyword: event.target.value});
    }
    componentDidMount() {
        axios.get('http://localhost:3020/quotation/list')
        .then((res)=> this.props.updateReducer(res.data))
    }
    
    
    render(){
    if(window.location.pathname.split('/').length - 1 >= 2){
        var pathID = window.location.pathname.substr(-24)
    }
    const { page, rowsPerPage, keyword } = this.state
    const { requestsList } = this.props
    // const requestsListFiltered = requestsList.filter(el => (el.quotationNUM.includes(keyword.trim()) || 
    //     el.details[0].description.toUpperCase().includes(keyword.toUpperCase().trim()) || 
    //     el.date.includes(keyword.trim()))
    //     && el.status === 'Answered')
    const requestsListFiltered = requestsList.filter((el, index) => (el.quotationNUM.includes(keyword.trim()) || el.details[0].description1.toUpperCase().includes(keyword.toUpperCase().trim())
    || String(el.date).includes(keyword))
     && el.status === 'Answered')
    return (
        <Main pageName={'All Sent Requests'}>
            <Paper className={useStyles.root} style={{width: '100%'}}>
                <p className="note-req-received">The table below contains all your recent received responses to your quotations, you will find all the needed informations.<br/>
                You can click on the request you want to check in then you will find all the responses to that specific request. You can use the search feature by typing your <em>requirements</em></p>
                <div className={useStyles.tableWrapper}>
                    <TextField
                        id="outlined-bare"
                        className={useStyles.textField}
                        value={keyword}
                        placeholder={"Type the description, date or quotation number you are looking for (𝑒.𝑔: 1508 or Laptop or 30/07/2019)"}
                        onChange={this.handleChangeSearch}
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                    <br/>
                    <Divider/>
                    <Divider/>
                    <br/>
                    <Table className={useStyles.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">Quot.N°</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">FirstName</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">LastName</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">Quantity</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">Date</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#46b081'}} align="left">Valid Until</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requestsListFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => row.details.map(el => (
                                <StyledTableRow className="row-tab-req" key={row.quotationNUM} component={Link} to={`/buyer_dashboard/req-received/o/${row._id}/${pathID}`}>
                                    <StyledTableCell component="th" scope="row">{row.quotationNUM}</StyledTableCell>
                                    <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                                    <StyledTableCell align="left">{ (el.name2 !== '' || el.name3 !== '' || el.name4 !== '')  ? <Chip className={useStyles.chip} label={el.name1+'  ➕'} color="primary" /> : <Chip className={useStyles.chip} label={el.name1} color="primary" />}</StyledTableCell>
                                    <StyledTableCell align="center">{el.quantity1}</StyledTableCell> 
                                    <StyledTableCell align="left">{String(row.date).slice(0, 10)}</StyledTableCell>
                                    <StyledTableCell align="left">{String(row.validUntil).slice(0, 10)}</StyledTableCell>
                                </StyledTableRow>
                            ))) }
                            
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={requestsListFiltered.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        </Main>
    );
}
}

const mapStateToProps = state => {
    return{
        requestsList: state.reducerReqWaiting
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateReducer: updated => {
            dispatch({
                type: 'UPDATE_TABS',
                updated
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllQuotationReceived)