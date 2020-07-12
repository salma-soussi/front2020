import React, { useEffect } from 'react';
import { Chip, TablePagination, TableFooter, Paper, TableRow, TableHead, TableBody, Table, TextField, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { TablePaginationActions, useStyles, StyledTableCell, StyledTableRow } from './RequestQuotation'
import Main from './Main';


// ********************         SOLD ITEMS COMPONENT
function SoldItems(props) {
    const { soldQuots } = props
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [keyword, setKeyword] = React.useState();

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    function handleChangeSearch(event) {
        setKeyword(event.target.value);
    }
    const soldQuotsFiltered = soldQuots.filter(el => el._id !== keyword && el.status === 'Sold')
    useEffect(() => {
        axios.get('http://localhost:3020/quotation/list')
            .then((res) => props.updateReducer(res.data))
    })
    if (window.location.pathname.split('/').length - 1 >= 2) {
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <Main pageName={'Sold Items'}>
            <Paper className={classes.root}>
                <p className="note-quotation-sold">In this section, you will find all the accepted quotations by the clients.
                    In the table below you will find <b>all</b> the sold items and more details for each one <em>(𝘦.𝘨: 𝘛𝘰𝘵𝘢𝘭 𝘗𝘳𝘪𝘤𝘦, 𝘊𝘰𝘮𝘱𝘢𝘯𝘺 𝘕𝘢𝘮𝘦...) </em>
                    your responses.<br /> Click on the quotation that you are looking for then you will be directed to see all the details. If you did not found it,
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

                    {soldQuots.filter(el => el.quotationNUM === keyword && el.status === 'Sold').slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(row => (
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Quot.N°</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Company Name</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">First Name</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Last Name</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Name</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Quantity</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Total Price (TND)</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: '#ff4242' }} align="left">Date</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow className="row-tab-req req-selected" key={row.quotationNUM} component={Link} to={`/seller_dashboard/sold-items/${row._id}/${row.status}/${pathID}`}>
                                        <StyledTableCell component="th" scope="row">{row.quotationNUM}</StyledTableCell>
                                        <StyledTableCell align="left">{row.companyName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                                        {/* <StyledTableCell align="left">{ Object.keys(row.details[0]).length === 3 ? <Chip className={classes.chip} label={row.details[0].description1} color="primary" /> : <Chip className={classes.chip} label={row.details[0].description1+'  ➕'} color="primary" />}</StyledTableCell> */}
                                        <StyledTableCell align="left">{(row.details[0].name2 !== '' || row.details[0].name3 !== '' || row.details[0].name3 !== '') ? <Chip className={classes.chip} label={row.details[0].name1 + '  ➕'} color="primary" /> : <Chip className={classes.chip} label={row.details[0].name1} color="primary" />}</StyledTableCell>
                                        <StyledTableCell align="center">{row.details[0].quantity1}</StyledTableCell>
                                        <StyledTableCell align="center">{row.total}</StyledTableCell>
                                        <StyledTableCell align="left">{String(row.date).slice(0, 10)}</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        ))}
                    <br />
                    <Divider />
                    <Divider />
                    <br />
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Quot.N°</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Company Name</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">First Name</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Last Name</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">NAME</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Quantity</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Total Price (TND)</StyledTableCell>
                                <StyledTableCell style={{ backgroundColor: '#22c1c3' }} align="left">Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {soldQuotsFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                <StyledTableRow className="row-tab-req" key={row.quotationNUM} component={Link} to={`/seller_dashboard/sold-items/${row._id}/${row.status}/${pathID}`}>
                                    <StyledTableCell component="th" scope="row">{row.quotationNUM}</StyledTableCell>
                                    <StyledTableCell align="left">{row.companyName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                                    <StyledTableCell align="left">{Object.keys(row.details[0]).length === 3 ? <Chip className={classes.chip} label={row.details[0].name1} color="primary" /> : <Chip className={classes.chip} label={row.details[0].name1 + '  ➕'} color="primary" />}</StyledTableCell>
                                    <StyledTableCell align="center">{row.details[0].quantity1}</StyledTableCell>
                                    <StyledTableCell align="center">{row.total}</StyledTableCell>
                                    <StyledTableCell align="left">{String(row.date).slice(0, 10)}</StyledTableCell>
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

export default connect(mapStateToProps, mapDispatchToProps)(SoldItems)