import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Paper, Grid, Container } from '@material-ui/core';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Main from './Main';
import AllQuotsChart from '../dhasboard parts/Dashboard_Cards/AllQuotsChart';
import DiffTotal from '../dhasboard parts/Dashboard_Cards/DiffTotal';



class Stats extends Component {
    
    componentDidMount() {
        axios.get('/api/quotations')
            .then((res) => this.props.updateReducer(res.data))
    }

    render() {
        return (
            <Main pageName={'Stats'}>
                <Container>
                    <Grid item xs={12}>
                        <AllQuotsChart />
                    </Grid>
                    <Grid item xs={12}>
                        <DiffTotal />
                    </Grid>
                </Container>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        allQuotations: state.reducerReqWaiting
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
export default connect(mapStateToProps, mapDispatchToProps)(Stats)