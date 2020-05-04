import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';
import { connect } from 'react-redux';

// Generate Sales Data

function Chart(props) {
  
  let totalToday0 = props.profit.filter(el => el.status === 'Sold' && String(el.date).slice(8, 10) === 
  Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))

  let totalToday1 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-1)

  let totalToday2 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-2)

  let totalToday3 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-3)

  let totalToday4 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-4)

  let totalToday5 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-5)

  let totalToday6 = props.profit.filter(el => el.status === 'Sold' && Number(String(el.date).slice(8, 10)) === 
  Number(Intl.DateTimeFormat('en-GB', {day: '2-digit'}).format(Date.now()))-6)
  


  var sum0 = 0
  for(let x of totalToday0){
    sum0 = Number(x.total) + sum0
  }
  var sum1 = 0
  for(let x of totalToday1){
    sum1 = Number(x.total) + sum1
  }
  var sum2 = 0
  for(let x of totalToday2){
    sum2 = Number(x.total) + sum2
  }
  var sum3 = 0
  for(let x of totalToday3){
    sum3 = Number(x.total) + sum3
  }
  var sum4 = 0
  for(let x of totalToday4){
    sum4 = Number(x.total) + sum4
  }
  var sum5 = 0
  for(let x of totalToday5){
    sum5 = Number(x.total) + sum5
  }
  var sum6 = 0
  for(let x of totalToday6){
    sum6 = Number(x.total) + sum6
  }

  function createData(day, amount) {
    return { day, amount };
  }

  // modulo function
  function mod(a, n){
    return a - (n * Math.floor(a/n))
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
    createData(day6, sum6),
    createData(day5, sum5),
    createData(day4, sum4),
    createData(day3, sum3),
    createData(day2, sum2),
    createData(day1, sum1),
    createData(day0, sum0),
  ];
    return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
              top: 16,
            right: 16,
            bottom: 0,
            left: 24,
        }}
          >
          <XAxis dataKey="day" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales (TND)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    profit: state.reducerReqWaiting
  }
}

export default connect(mapStateToProps)(Chart);