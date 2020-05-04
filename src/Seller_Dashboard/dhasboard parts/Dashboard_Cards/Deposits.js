import React from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Deposits(props) {
  const classes = useStyles();
  const { total } = props
  const soldItems = total.filter(el => el.status === 'Sold')
  var sum = 0
  for(let x of soldItems){
    sum = Number(x.total) + sum
  }
  return (
    <React.Fragment>
      <Title>Profit</Title>
      <Typography id="tnd" component="p" variant="h4">
        {String(sum).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
        {/* <span style={{fontSize: '5px'}}>TND</span> */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {Intl.DateTimeFormat('en-GB', {weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'}).format(Date.now())}
      </Typography>
      <div>
        <Link className={classes.seeMore} to={`/seller_dashboard/o/sold-items/${props.sellerID}`} style={{textDecoration: 'none', color: '#0074D9'}} color="primary">
          See All Accepted Quotations
        </Link>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    total: state.reducerReqWaiting
  }
}

export default connect(mapStateToProps)(Deposits)