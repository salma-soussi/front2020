import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import Title from '../Title';


function Orders(props) {
  const { allQuots } = props
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allQuots.slice(allQuots.length-15, allQuots.length).map((row, index) => (
            <TableRow key={index} style={{opacity: '.9'}}>
              <TableCell>{String(row.date).slice(0, 10)}</TableCell>
              <TableCell>{row.firstName + ' ' + row.lastName}</TableCell>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="center">{row.details.map(el => el.name1)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    allQuots: state.reducerReqWaiting
  }
}

export default connect(mapStateToProps)(Orders)