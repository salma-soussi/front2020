import React, { useEffect } from 'react';
import { TablePagination, TableFooter, Paper, TableRow, TableHead, TableBody, Table, TextField, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import { TablePaginationActions, useStyles, StyledTableCell, StyledTableRow } from './RequestQuotation'
import Main from './Main';




// ********************         CUSTOMERS LIST COMPONENT
function Customers(props) {
    const classes = useStyles();
    const { customerList } = props

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [keyword, setKeyword] = React.useState('');

    function handleChangePage(event, newPage){
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event){
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    function handleChangeSearch(event){
        setKeyword(event.target.value.toUpperCase());
    }
    // const customersListFiltered = customerList.filter(customer => ((customer.companyName.toUpperCase().includes(keyword)) || 
    //     (customer.firstName.toUpperCase().includes(keyword)) || (customer.lastName.toUpperCase().includes(keyword)) || 
    //     (customer.date.includes(keyword))) && customer.status === 'Sold')
    // const customersListFiltered = customerList.filter(el => (el.firstName.toUpperCase().includes(keyword)) && el.status === 'Sold')
    const customersListFiltered = customerList.filter(el =>  el.status === 'Sold')
    
    useEffect(()=>{
        axios.get('http://localhost:3020/quotation/list')
        .then((res) => props.updateReducer(res.data))
    })
    if(window.location.pathname.split('/').length - 1 >= 2){
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <Main pageName={'Sold Items'}>
            <Paper className={classes.root}>
                <p className="note-customer">In this section, you will find all the answered requests. 
                    This section is created to give you the opportunity to check <span style={{textDecoration: "underline", fontWeight: 'bold'}}>All </span>
                    your responses. Click on the quotation that you are looking for then you will be directed to see all the details. If you did not found it,
                    use the search bar, you can search by Company Name, the Customer Name or last operation date . And that's it!</p>
                <div className={classes.tableWrapper}>
                    <TextField
                        id="outlined-bare"
                        className={classes.textField}
                        value={keyword}
                        placeholder={"Type the Company Name, Customer Name or Date (𝑒.𝑔: Go My Code or Moez or 30/07/2019)"}
                        onChange={handleChangeSearch}
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                    />
                    <br/>
                    <Divider/>
                    <Divider/>
                    <br/>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: '#032952'}} align="left">Company Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#143963'}} align="left">First Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#032952'}} align="left">Last Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#143963'}} align="left">Last Operation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customersListFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer, index) => (
                                    <StyledTableRow key={index} className="row-tab-req" key={customer.customerID} component={Link} to={`/seller_dashboard/customers/${customer.customerID}/${pathID}`}>
                                        <StyledTableCell align="left">{customer.companyName.toUpperCase()}</StyledTableCell>
                                        <StyledTableCell align="left">{customer.firstName.toUpperCase()}</StyledTableCell>
                                        <StyledTableCell align="left">{customer.lastName.toUpperCase()}</StyledTableCell>
                                        <StyledTableCell align="left">{String(customer.date).slice(0, 10)}</StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={customersListFiltered.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
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

const mapStateToProps = state => {
    return {
        customerList: state.reducerReqWaiting
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
export default connect(mapStateToProps, mapDispatchToProps)(Customers)