import React, { Component } from 'react'
import { Chip, TextField, Divider, TablePagination, TableFooter, IconButton, Paper, TableRow, TableHead, TableCell, TableBody, Table, makeStyles, useTheme, withStyles} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import axios from 'axios'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useStyles } from './Main'
import Main from './Main'




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


export const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
    chip: {
        margin: theme.spacing(1),
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
class AllQuotationSent extends Component {
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
    
    const { sentQuots } = this.props
    
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
    // function handleChangePage(event, newPage){
    //     setPage(newPage);
    // }
    // function handleChangeRowsPerPage(event){
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // }
    // const classes = useStyles();
    console.log("sentQuots :")
    console.log(sentQuots)
    const sentQuotsFiltered = sentQuots.filter((el, index) => (el.quotationNUM.includes(keyword.trim()) || el.details[0].description1.toUpperCase().includes(keyword.toUpperCase().trim()))
     && el.status === 'Waiting');
     console.log("sentQuotsFiltered :")
     console.log(sentQuotsFiltered)
     
    return (
        <Main pageName={'All Sent Requests'}>
            <Paper className={useStyles.root} style={{width: '100%'}}>
                <p className="note-req-sent">The table below contains all your recent requests sent, you will find all the needed informations.<br/>
                You can click on the request you want to check in for more details and you can use the search feature by typing your <em>requirements</em></p>
                <div className={useStyles.tableWrapper}>
                    <TextField
                        id="outlined-bare"
                        className={useStyles.textField}
                        value={keyword}
                        placeholder={"Type request number or the requirments you are looking for (𝑒.𝑔: 2523 or Printer)"}
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
                                <StyledTableCell style={{backgroundColor: '#0074D9'}} align="left">Req.N°</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#0088ff'}} align="left">Descriptions</StyledTableCell>
                                <StyledTableCell style={{backgroundColor: '#0074D9'}} align="left">Quantity</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sentQuotsFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                    <StyledTableRow className="row-tab-req" key={row.quotationNUM} component={Link} to={`/buyer_dashboard/req-sent/o/${row._id}/${row.status}/${pathID}`}>
                                        <StyledTableCell component="th" scope="row">{row.quotationNUM}</StyledTableCell>
                                        <StyledTableCell align="left">
                                        {row.details.map(x => (
                                            <div>
                                                <Chip className={x.description1 === '' ? 'empty' : useStyles1.chip} label={x.description1} style={{backgroundColor: '#3d04cc', color: 'white'}} /> 
                                                <Chip className={x.description2 === '' ? 'empty' : useStyles1.chip} label={x.description2} style={{backgroundColor: '#3d04cc', color: 'white'}} /> 
                                                <Chip className={x.description3 === '' ? 'empty' : useStyles1.chip} label={x.description3} style={{backgroundColor: '#3d04cc', color: 'white'}} /> 
                                                <Chip className={x.description4 === '' ? 'empty' : useStyles1.chip} label={x.description4} style={{backgroundColor: '#3d04cc', color: 'white'}} /> 
                                            </div>
                                            ))}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.details[0].quantity1}</StyledTableCell>
                                    </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={sentQuotsFiltered.length}
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
        sentQuots: state.reducerReqWaiting
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

export default connect(mapStateToProps, mapDispatchToProps)(AllQuotationSent);