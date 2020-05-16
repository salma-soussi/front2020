import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import quotation from '../../img/quotation.svg'
import quotationreq from '../../img/quotationreq.png'
import solditem from '../../img/solditem.svg'
import profilseller from '../../img/profilseller.svg'
import logout2 from '../../img/logout2.svg'
import { connect } from 'react-redux';
import axios from 'axios';


class MainListItems extends Component{
  componentDidMount() {
    if(window.location.pathname.split('/').length - 1 >= 2){
      var pathID = window.location.pathname.substr(-24)
    }
    axios.get(`http://localhost:3020/seller/getByID/${pathID}`)
        .then((res) => this.props.updateSeller(res.data))
}
  render(){
    if(window.location.pathname.split('/').length - 1 >= 2){
      var pathID = window.location.pathname.substr(-24)
    }
    return(
      <div>
        {/* DASHBOARD PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/${pathID}`} selected={`/seller_dashboard/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* REQUESTS QUOTATIONS PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/o/req-quotations/${pathID}`} selected={`/seller_dashboard/o/req-quotations/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <img src={quotationreq} style={{opacity: '0.5', width: '20px'}} alt="seller dashboard manage the requests for a quotations"/>
          </ListItemIcon>
              <ListItemText primary="Quotations Request" />
            {/* </Badge> */}
        </ListItem>
        {/* QUOTATIONS SENT PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/o/quotations/${pathID}`} selected={`/seller_dashboard/o/quotations/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <img src={quotation} style={{opacity: '0.5', width: '20px'}} alt="seller dashboard page to manage the quotations sent to the clients"/>
          </ListItemIcon>
          <ListItemText primary="Answered Quotations" />
        </ListItem>
        {/* SOLD ITEMS PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/o/sold-items/${pathID}`} selected={`/seller_dashboard/o/sold-items/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
          <img src={solditem} style={{opacity: '0.5', width: '20px'}} alt="seller dashboard page contains the sold items"/>
          </ListItemIcon>
          <ListItemText primary="Sold items" />
        </ListItem>
        {/* LIST OF CUSTOMERS PAGE*/}
        <ListItem button component={Link} to={`/seller_dashboard/o/customers/${pathID}`} selected={`/seller_dashboard/o/customers/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        {/* REPORTS, STATS PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/stats/${pathID}`} selected={`/seller_dashboard/stats/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Stats" />
        </ListItem>
        {/* PROFIL PAGE */}
        <ListItem button component={Link} to={`/seller_dashboard/profil/${pathID}`} selected={`/seller_dashboard/profil/${pathID}` === this.props.location.pathname}>
          <ListItemIcon>
            <img src={profilseller} style={{opacity: '0.5', width: '20px'}} alt="seller dashboard page contains the sold items"/>
          </ListItemIcon>
          <ListItemText primary="Profil" />
        </ListItem>
        {/* LOGOUT */}
        <ListItem button onClick={() => this.props.history.push('/loginasseller')}>
          <ListItemIcon>
            <img src={logout2} style={{transform: 'scale(-1, 1)',opacity: '0.5', width: '20px'}} alt="seller dashboard page contains the sold items"/>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
      sellersList: state.SellerReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateSeller: updated => {
          dispatch({
              type: 'UPDATE_SELLERS',
              updated
          })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainListItems));