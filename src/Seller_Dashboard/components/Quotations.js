import React, { useEffect } from 'react';
import { Chip, TablePagination, TableFooter, Paper, TableRow, TableHead, TableBody, Table, TextField, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { TablePaginationActions, useStyles, StyledTableCell, StyledTableRow } from './RequestQuotation'
import Main from './Main';


// ********************         ANSWERED QUOTATIONS COMPONENT
function Quotations(props) {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [keyword, setKeyword] = React.useState();
    
    function handleChangePage(event, newPage){
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event){
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    function handleChangeSearch(event){
        setKeyword(event.target.value);
    }
    
    const { requestsList, updateReducer } = props
    const requestsListFiltered = requestsList.filter(el => el.quotationNum !== keyword && el.status === 'Answered')
    useEffect(()=>{
        axios.get('/api/quotations')
        .then((res)=>updateReducer(res.data))
    })
    if(window.location.pathname.split('/').length - 1 >= 2){
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <Main pageName={'Quotations'}>
            <Paper className={classes.root}>
                <p className="note-quotation-answered">In this section, you will find all the answered requests. 
                    This section is created to give you the opportunity to check <span style={{textDecoration: "underline", fontWeight: 'bold'}}>All </span>
                    your responses. Click on the quotation that you are looking for then you will be directed to see all the details. If you did not found it, 
                    you can use the search bar, type the quotation number. And that's it.</p>
                <div className={classes.tableWrapper}>
                    <TextField
                        id="outlined-bare"
                        className={classes.textField}
                        value={keyword}
                        placeholder={"Type quotation number (𝑒.𝑔: 𝟧𝟢𝟤𝟥)"}
                        onChange={handleChangeSearch}
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                        />
                    
                        {requestsList.filter(el => el.quotationNum === keyword && el.status === 'Answered').slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(elem => (
                                <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Quot.N°</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Company Name</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">First Name</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Last Name</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Description</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Quantity</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Date</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor: '#ff4242'}} align="left">Valid Until</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow className="row-tab-req req-selected" key={elem._id} component={Link} to={`/seller_dashboard/quotations/${elem._id}/${elem.status}/${pathID}`}>
                                        <StyledTableCell component="th" scope="row">{elem.quotationNum}</StyledTableCell>
                                        <StyledTableCell align="left">{elem.companyName}</StyledTableCell>
                                        <StyledTableCell align="left">{elem.firstName}</StyledTableCell>
                                        <StyledTableCell align="left">{elem.lastName}</StyledTableCell>
                                        <StyledTableCell align="left">{ Object.keys(elem.details[0]).length === 3 ? <Chip className={classes.chip} label={elem.details[0].description1} color="primary" /> : <Chip className={classes.chip} label={elem.details[0].description1+'  ➕'} color="primary" />}</StyledTableCell>
                                        <StyledTableCell align="center">{elem.details[0].quantity1}</StyledTableCell>                                    
                                        <StyledTableCell align="left">{String(elem.date).slice(0, 10)}</StyledTableCell>
                                        <StyledTableCell align="left">{String(elem.validUntil).slice(0, 10)}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        ))}
                    <br/>
                    <Divider/>
                    <Divider/>
                    <br/>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Quot.N°</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Company Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">First Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Last Name</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Description</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Quantity</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Date</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#fdbb2d'}} align="left">Valid Until</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requestsListFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => row.details.map(el => (
                                <StyledTableRow className="row-tab-req" key={row._id} component={Link} to={`/seller_dashboard/quotations/${row._id}/${row.status}/${pathID}`}>
                                    <StyledTableCell component="th" scope="row">{row.quotationNum}</StyledTableCell>
                                    <StyledTableCell align="left">{row.companyName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                                    {/* <StyledTableCell align="left">{ Object.keys(row.details[0]).length === 3 ? <Chip className={classes.chip} label={row.details[0].description1} color="primary" /> : <Chip className={classes.chip} label={row.details[0].description1+'  ➕'} color="primary" />}</StyledTableCell> */}
                                    <StyledTableCell align="left">{ (el.description2 !== '' || el.description3 !== '' || el.description4 !== '')  ? <Chip className={classes.chip} label={el.description1+'  ➕'} color="primary" /> : <Chip className={classes.chip} label={el.description1} color="primary" />}</StyledTableCell>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quotations)