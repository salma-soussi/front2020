import React, { Component } from 'react'
import { TablePagination, TableFooter, Paper, TableRow, TableHead, TableBody, Table, Divider, TextField, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import {StyledTableCell, StyledTableRow, TablePaginationActions} from './AllQuotationSent'
import { useStyles } from './Main'
import Main from './Main'


// ********************         REQUEST QUOTATION COMPONENT
class AllPurchases extends Component {
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
        const { soldQuots } = this.props
        const soldQuotsFiltered = soldQuots.filter(el => (el.quotationNUM.includes(keyword.trim())
        || el.details[0].description1.toUpperCase().includes(keyword.toUpperCase().trim())
        ) && el.status === 'Sold')
        return (
        <Main pageName={'All Sent Requests'}>
            <Paper className={useStyles.root} style={{width: '100%'}}>
                <p className="note-req-closed">The table below contains all your recent received responses to your quotations, you will find all the needed informations.<br/>
                You can click on the request you want to check in then you will find all the responses to that specific request. You can use the search feature by typing your <em>requirements</em></p>
                <div className={useStyles.tableWrapper}>
                    <TextField
                        id="outlined-bare"
                        className={useStyles.textField}
                        value={keyword}
                        placeholder={"Type the quotation number or description you are looking for (𝑒.𝑔: 244 or Laptop)"}
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
                                <StyledTableCell style={{backgroundColor: '#f5a302'}} align="left">Quot.N°</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#e89a00'}} align="left">Description</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#f5a302'}} align="left">Quantity</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#e89a00'}} align="left">Seller Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#f5a302'}} align="left">Total Price (TND)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {soldQuotsFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(el => (
                                    <StyledTableRow className="row-tab-req" key={el.quotationNUM} component={Link} to={`/buyer_dashboard/purchases/o/${el._id}/${pathID}`}>
                                        <StyledTableCell component="th" scope="row">{el.quotationNUM}</StyledTableCell>
                                        <StyledTableCell align="left">{ Object.keys(el.details[0]).length === 3 ? <Chip className={useStyles.chip} label={el.details[0].description1} color="primary" /> : <Chip className={useStyles.chip} label={el.details[0].description1+'  ➕'} color="primary" />}</StyledTableCell>
                                        <StyledTableCell align="center">{el.details[0].quantity1}</StyledTableCell>
                                        <StyledTableCell align="left">Seller Name</StyledTableCell>
                                        <StyledTableCell align="left">{el.total}</StyledTableCell>
                                    </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={soldQuotsFiltered.length}
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
        soldQuots: state.reducerReqWaiting
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

export default connect(mapStateToProps, mapDispatchToProps)(AllPurchases)
