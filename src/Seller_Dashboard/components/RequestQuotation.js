import React, { useEffect } from 'react'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import { Chip, TablePagination, TableFooter, IconButton, Paper, TableRow, TableHead, TableCell, TableBody, Table, makeStyles, useTheme, withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Main from './Main';

export const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.main
        },
    },
}))(TableRow);


export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    chip: {
        margin: theme.spacing(1),
    },
}));

export const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));


// ********************         PAGINATION FUNCTION
export function TablePaginationActions(props) {

    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event){
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event){
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event){
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event){
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

// ********************         REQUEST QUOTATION COMPONENT
function RequestQuotation(props) {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    function handleChangePage(event, newPage){
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event){
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    const {requestsList, updateReducer} = props
    const requesListFiltered = requestsList.filter(el => el.status === 'Waiting')
    useEffect(()=>{
        axios.get('http://localhost:3020/quotation/list')
        .then((res)=>updateReducer(res.data))

        // axios.get('/api/quotations')
        // .then((res)=> res.json()).then((data) => {
        //     updateReducer(data)
        //     console.log(data)
        // })
    })
    if(window.location.pathname.split('/').length - 1 >= 2){
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <Main pageName={'Quotation Requests'}>
            <Paper className={classes.root}>
                <p className="note-quotation-req">Inside this table you will find all the recent quotation requests, waiting for your answer.
                    <br/>Do not wait too long to answer, otherwise, probably, you will miss the opportunity to sell your product.<br/>
                    Click on the ones waiting for your answer, see their informations and requirements, fill in the quotation, price for every item, 
                    price per unit, tax and total price then click on <em style={{textDecoration: "underline", fontWeight: 'bold'}}>Send</em>. Now it's your time to wait their answer (call, email) if they are 
                    going to buy your product. GOOD LUCK!</p>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Quot.N°</StyledTableCell>
                                <StyledTableCell align="left">Company Name</StyledTableCell>
                                <StyledTableCell align="left">First Name</StyledTableCell>
                                <StyledTableCell align="left">Last Name</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Quantity</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Valid Until</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requesListFiltered.length === 0 ? <h4 align="center">No requests received!</h4> : 
                                requesListFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => row.details.map(el => (
                                    <StyledTableRow className="row-tab-req" key={row._id} component={Link} to={`/seller_dashboard/req-quotations/${row._id}/${row.status}/${pathID}`}>
                                        <StyledTableCell component="th" scope="row">{row.quotationNUM}</StyledTableCell>
                                        <StyledTableCell align="left">{row.companyName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.firstName}</StyledTableCell>
                                        <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                                        <StyledTableCell align="left">{ (el.name2 !== '' || el.name3 !== '' || el.name3 !== '')  ? <Chip className={classes.chip} label={el.name1+'  ➕'} color="primary" /> : <Chip className={classes.chip} label={el.name1} color="primary" />}</StyledTableCell>
                                        <StyledTableCell align="center">{el.quantity1}</StyledTableCell>                                    
                                        <StyledTableCell align="left">{String(row.date).slice(0, 10)}</StyledTableCell>
                                        <StyledTableCell align="left">{String(row.validUntil).slice(0, 10)}</StyledTableCell>
                                    </StyledTableRow>
                                )))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={requesListFiltered.length}
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
export default connect(mapStateToProps, mapDispatchToProps)(RequestQuotation)