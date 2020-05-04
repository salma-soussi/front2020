import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Paper } from '@material-ui/core'



class DiffTotal extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

    render() {
        let totalToday0 = this.props.profit.filter(el => el.status === 'Sold' && String(el.date).slice(8, 10) ===
            Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now()))

        let totalToday1 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 1)

        let totalToday2 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 2)

        let totalToday3 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 3)

        let totalToday4 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 4)

        let totalToday5 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 5)

        let totalToday6 = this.props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 6)

        let missedToday0 = this.props.profit.filter(el => el.status === 'Denied' && String(el.date).slice(8, 10) ===
            Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now()))

        let missedToday1 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 1)

        let missedToday2 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 2)

        let missedToday3 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 3)

        let missedToday4 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 4)

        let missedToday5 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 5)

        let missedToday6 = this.props.profit.filter(el => el.status === 'Denied' && Number(String(el.date).slice(8, 10)) ===
            Number(Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(Date.now())) - 6)



        var sum0 = 0
        for (let x of totalToday0) {
            sum0 = Number(x.total) + sum0
        }
        var sum1 = 0
        for (let x of totalToday1) {
            sum1 = Number(x.total) + sum1
        }
        var sum2 = 0
        for (let x of totalToday2) {
            sum2 = Number(x.total) + sum2
        }
        var sum3 = 0
        for (let x of totalToday3) {
            sum3 = Number(x.total) + sum3
        }
        var sum4 = 0
        for (let x of totalToday4) {
            sum4 = Number(x.total) + sum4
        }
        var sum5 = 0
        for (let x of totalToday5) {
            sum5 = Number(x.total) + sum5
        }
        var sum6 = 0
        for (let x of totalToday6) {
            sum6 = Number(x.total) + sum6
        }
        var miss0 = 0
        for (let x of missedToday0) {
            miss0 = Number(x.total) + miss0
        }
        var miss1 = 0
        for (let x of missedToday1) {
            miss1 = Number(x.total) + miss1
        }
        var miss2 = 0
        for (let x of missedToday2) {
            miss2 = Number(x.total) + miss2
        }
        var miss3 = 0
        for (let x of missedToday3) {
            miss3 = Number(x.total) + miss3
        }
        var miss4 = 0
        for (let x of missedToday4) {
            miss4 = Number(x.total) + miss4
        }
        var miss5 = 0
        for (let x of missedToday5) {
            miss5 = Number(x.total) + miss5
        }
        var miss6 = 0
        for (let x of missedToday6) {
            miss6 = Number(x.total) + miss6
        }

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
                day: day6, profit: sum6, missed: miss6,
            },
            {
                day: day5, profit: sum5, missed: miss5,
            },
            {
                day: day4, profit: sum4, missed: miss4,
            },
            {
                day: day3, profit: sum3, missed: miss3,
            },
            {
                day: day2, profit: sum2, missed: miss2,
            },
            {
                day: day1, profit: sum1, missed: miss1,
            },
            {
                day: day0, profit: sum0, missed: miss0,
            },
        ];
        return (
            <Paper className="diff-total">
                <h2>Profit vs Opportunities Missed</h2>
                <BarChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="profit" stackId="a" fill="#8884d8" />
                    <Bar dataKey="missed" fill="#ffc658" />
                </BarChart>
            </Paper>
        );
    }
}
const mapStateToProps = state => {
    return {
      profit: state.reducerReqWaiting
    }
  }
export default connect(mapStateToProps)(DiffTotal);