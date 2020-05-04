import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import reqsent from '../../img/reqsent.svg'
import received from '../../img/received.svg'
import purchase from '../../img/purchase.svg'
import newrequest from '../../img/newrequest.svg'
import logout from '../../img/logout.svg'
import profil from '../../img/profil.svg'
import axios from 'axios';
import { connect } from 'react-redux'

class MainListItems extends Component{
  componentDidMount() {
    if(window.location.pathname.split('/').length - 1 >= 2){
      var pathID = window.location.pathname.substr(-24)
    }
    axios.get(`/users/buyer/${pathID}`)
        .then((res) => this.props.updateBuyer(res.data))
}
    render(){
      const {buyersList} = this.props
      console.log(window.location.pathname.substr(-24))
      if(window.location.pathname.split('/').length - 1 >= 2){
        var pathID = window.location.pathname.substr(-24)
      }
      return (
        <div>
    {/* DASHBOARD PAGE */}
    <ListItem button component={Link} to={`/buyer_dashboard/${pathID}`} selected={`/buyer_dashboard/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    {/* CREATE NEW REQUEST PAGE*/}
    <ListItem button component={Link} to={`/buyer_dashboard/new-request/${pathID}`} selected={`/buyer_dashboard/new-request/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <img src={newrequest} style={{opacity: '0.5', width: '20px'}} alt="new request"/>
      </ListItemIcon>
      <ListItemText primary="New Request" />
    </ListItem>
    {/* REQUESTS SENT PAGE */}
    <ListItem button component={Link} to={`/buyer_dashboard/req-sent/${pathID}`} selected={`/buyer_dashboard/req-sent/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <img src={reqsent} style={{opacity: '0.5', width: '20px'}} alt="buyer dashboard all sent requests"/>
      </ListItemIcon>
      <ListItemText primary="Requests Sent" />
    </ListItem>
    {/* QUOTATIONS RECEIVED PAGE */}
    <ListItem button component={Link} to={`/buyer_dashboard/req-received/s/${pathID}`} selected={`/buyer_dashboard/req-received/s/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <img src={received} style={{opacity: '0.5', width: '20px'}} alt="buyer dashboard all received quotations"/>
      </ListItemIcon>
      <ListItemText primary="Quotations Received" />
    </ListItem>
    {/* ALL PURCHASES PAGE */}
    <ListItem button component={Link} to={`/buyer_dashboard/purchases/s/${pathID}`} selected={`/buyer_dashboard/purchases/s/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <img src={purchase} style={{opacity: '0.5', width: '20px'}} alt="all the purchased items"/>
      </ListItemIcon>
      <ListItemText primary="Purchases" />
    </ListItem>
    {/* PROFIL PAGE */}
    <ListItem button component={Link} to={`/buyer_dashboard/profil/${pathID}`} selected={`/buyer_dashboard/profil/${pathID}` === this.props.location.pathname}>
      <ListItemIcon>
        <img src={profil} style={{opacity: '0.5', width: '20px'}} alt="all the purchased items"/>
      </ListItemIcon>
      <ListItemText primary="Profil" />
    </ListItem>
    {/* Logout */}
    <ListItem button onClick={() => this.props.history.push("/loginasbuyer")}>
      <ListItemIcon>
        <img src={logout} style={{transform: 'scale(-1, 1)', opacity: '0.5', width: '20px'}} alt="all the purchased items"/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
)
}
}
const mapStateToProps = state => {
  return{
      buyersList: state.BuyerReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateBuyer: updated => {
          dispatch({
              type: 'UPDATE_USERS',
              updated
          })
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainListItems))

