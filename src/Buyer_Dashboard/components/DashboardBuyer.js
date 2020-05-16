import React, { useEffect } from 'react'
import clsx from 'clsx';
import { CssBaseline, Container, Grid, Paper, Table, TableBody, TableCell, TableRow, TableHead, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Main from './Main'
import { useStyles } from './Main'


function DashboardBuyer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const { quotsList } = props
    const quotsListSentFiltered = quotsList.filter(el => el.status === 'Waiting') // all Waiting quots
    const quotsListReceivedFiltered = quotsList.filter(el => el.status === 'Answered') // all Answered quots
    const quotsListSoldFiltered = quotsList.filter(el => el.status === 'Sold') // all Sold quots
    console.log( quotsListSoldFiltered)

    useEffect(() => {
        axios.get('http://localhost:3020/quotation/list')
            .then((res) => props.updateReducer(res.data))
    })
    if (window.location.pathname.split('/').length - 1 >= 2) {
        var pathID = window.location.pathname.substr(-24)
    }
    return (
        <div className={classes.root}>
            <Main pageName={'Dashboard'}>

                <CssBaseline />

                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper} style={{
                                backgroundImage: 'url(https://i.ibb.co/02KMwCv/bluewave.png)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <h1 style={{ color: 'white' }}>Recent Requests Sent</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Req.N°</TableCell>
                                            <TableCell>Requirement</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {quotsListSentFiltered.slice(0, 4).map(item => (
                                            <TableRow key={item.quotationNUM} className='row-tab-req' component={Link} to={`/buyer_dashboard/req-sent/o/${item._id}/${item.status}/${pathID}`}>
                                                <TableCell component="th" scope="row">{item.quotationNUM}</TableCell>
                                                {console.log("item is" + item)}
                                                <TableCell align="left">{item.details[0].description1}</TableCell>
                                                <TableCell align="center">{item.details[0].quantity1}</TableCell>
                                                <TableCell align="center">{String(item.date).slice(0, 10)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Button color="secondary" style={{ color: 'blue' }} component={Link} to={`/buyer_dashboard/req-sent/${pathID}`} className={classes.button}>
                                    See All
                            </Button>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper} style={{
                                backgroundImage: 'url(https://i.ibb.co/mXx43dL/greenwave.png)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            >
                                <h1 style={{ color: 'white' }}>Recent Quotations Received</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Req.N°</TableCell>
                                            <TableCell>Requirement</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {quotsListReceivedFiltered.slice(0, 4).map(item => (
                                            <TableRow className='row-tab-req' key={item.quotationNUM} button component={Link} to={`/buyer_dashboard/req-received/o/${item._id}/${pathID}`}>
                                                <TableCell component="th" scope="row">{item.quotationNUM}</TableCell>
                                                <TableCell align="left">{item.details[0].description1}</TableCell>
                                                <TableCell align="center">{item.details[0].quantity1}</TableCell>
                                                <TableCell align="center">{String(item.total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Button color="secondary" style={{ color: 'green' }} component={Link} to={`/buyer_dashboard/req-received/s/${pathID}`} className={classes.button}>
                                    See All
                            </Button>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper} style={{
                                backgroundImage: 'url(https://i.ibb.co/3f3T8qq/yellowwave.png)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            >
                                <h1 style={{ color: 'white' }}>Recent Purchases</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Req.N°</TableCell>
                                            <TableCell>Requirement</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {quotsListSoldFiltered.slice(0, 4).map(item => (
                                            <TableRow className='row-tab-req' key={item.quotationNUM} button component={Link} to={`/buyer_dashboard/purchases/o/${item._id}/${pathID}`}>
                                                <TableCell component="th" scope="row">{item.quotationNUM}</TableCell>
                                                <TableCell align="left">{item.details[0].description1}</TableCell>
                                                <TableCell align="center">{item.details[0].quantity1}</TableCell>
                                                <TableCell align="center">{String(item.total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Button color="secondary" style={{ color: 'orange' }} component={Link} to={`/buyer_dashboard/purchases/s/${pathID}`} className={classes.button}>
                                    See All
                        </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Main>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        quotsList: state.reducerReqWaiting
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardBuyer)