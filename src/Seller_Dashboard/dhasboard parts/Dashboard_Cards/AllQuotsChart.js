import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



class AllQuotsChart extends Component {
    componentDidMount() {
        axios.get('http://localhost:3020/quotation/list')
            .then((res) => this.props.updateReducer(res.data))
    }

    render() {
        let soldToday0 = this.props.allQuotations.filter(el => el.status === 'Sold' && String(el.date).slice(8, 10) ===
            Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now()))
        let deniedToday0 = this.props.allQuotations.filter(el => el.status === 'Denied' && String(el.date).slice(8, 10) ===
            Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now()))
        let Today0 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
        Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())))

        let soldToday1 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 1)
        let deniedToday1 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 1)
        let Today1 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
        Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 1)

        let soldToday2 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 2)
        let deniedToday2 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 2)
        let Today2 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
        Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 2)

        let soldToday3 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 3)
        let deniedToday3 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 3)
        let Today3 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 3)

        let soldToday4 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 4)
        let deniedToday4 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 4)
        let Today4 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 4)

        let soldToday5 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 5)
        let deniedToday5 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 5)
        let Today5 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 5)

        let soldToday6 = this.props.allQuotations.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 6)
        let deniedToday6 = this.props.allQuotations.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 6)
        let Today6 = this.props.allQuotations.filter(el => Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 6)
        


        // modulo function
        function mod(a, n) {
            return a - (n * Math.floor(a / n))
        }

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var day0 = days[new Date().getDay()]
        var day1 = days[mod((new Date().getDay() - 1), 7)]
        var day2 = days[mod((new Date().getDay() - 2), 7)]
        var day3 = days[mod((new Date().getDay() - 3), 7)]
        var day4 = days[mod((new Date().getDay() - 4), 7)]
        var day5 = days[mod((new Date().getDay() - 5), 7)]
        var day6 = days[mod((new Date().getDay() - 6), 7)]
        const data = [
            {
                day: day6, sold: soldToday6.length, denied: deniedToday6.length, received: Today6.length,
            },
            {
                day: day5, sold: soldToday5.length, denied: deniedToday5.length, received: Today5.length,
            },
            {
                day: day4, sold: soldToday4.length, denied: deniedToday4.length, received: Today4.length,
            },
            {
                day: day3, sold: soldToday3.length, denied: deniedToday3.length, received: Today3.length,
            },
            {
                day: day2, sold: soldToday2.length, denied: deniedToday2.length, received: Today2.length,
            },
            {
                day: day1, sold: soldToday1.length, denied: deniedToday1.length, received: Today1.length,
            },
            {
                day: day0, sold: soldToday0.length, denied: deniedToday0.length, received: Today0.length,
            },
        ];

        return (
            <Paper className="diff-total">
                <h2>Quotations Last Week</h2>
                <AreaChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sold" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="denied" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="received" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </Paper>

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
export default connect(mapStateToProps, mapDispatchToProps)(AllQuotsChart)