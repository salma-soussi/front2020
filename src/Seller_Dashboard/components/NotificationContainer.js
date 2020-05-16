import React, { Component } from 'react'
import {IconButton, Badge, Paper} from '@material-ui/core';
import axios from 'axios';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NotificationContainer extends Component {
        state = {
            notif: false,
            newNotif: false,
            seen: 'yes'
        }

    componentDidMount() {
        axios.get('http://localhost:3020/notification/list')
        .then((res)=> {this.props.updateReducer(res.data)})
    }
    notifToggle = () => {
        this.setState({ notif: !this.state.notif });
        this.setState({ newNotif: true });
        axios.put(`http://localhost:3020/notification/seen`, {
            seen: 'yes'
        }).then(() => this.props.notifseenReducer(this.state))
        // for(let x in this.props.notifications){
        //     setTimeout(() => this.setState({...this.props.notifseenReducer({...this.props.notifications[x], seen:'yes'})}), 3000)
        // }
    }

    render() {
        if(window.location.pathname.split('/').length - 1 >= 2){
            var pathID = window.location.pathname.substr(-24)
          }
        return (
            <div>
                <IconButton color="inherit" onClick={this.notifToggle}>
                    <Badge badgeContent={this.props.notifications.filter(el => el.seen === 'no' && (el.type === 'new' || el.type === 'accepted' || el.type === 'rejected')).length}
                    color="error"> {/* number notifications */}
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Paper className={this.state.notif ? 'notifOpen' : 'notifClosed'}>
                {this.props.notifications.filter(el => el.type === 'new' || el.type === 'accepted' || el.type === 'rejected').map((el, index) => (
                <Link style={{textDecoration: 'none'}} key={el.quotationNUM} to={el.type === 'new' ? `/seller_dashboard/req-quotations/${this.props.requestsList.filter(x => x.quotationNUM === el.quotationNUM).map(y => y._id)}/${el.status}/${pathID}` : (el.type === 'accepted' ? `/seller_dashboard/sold-items/${this.props.requestsList.filter(x => x.quotationNUM === el.quotationNUM).map(y => y._id)}/Sold/${pathID}` : null)}>
                    <div className={el.seen === 'no' ? 'new-notif-item' : "notif-item"}>
                        <p className="notif-item">{el.content} <span className="sender">{el.description1}</span></p>
                        <p className="notif-time">{String(el.time).replace('T', ' ').slice(0, 19)}</p>
                    </div>
                </Link>
                ))}
            </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      notifications: state.NotifReducer,
      requestsList: state.reducerReqWaiting
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        notifseenReducer: notifseen => {
            dispatch({
                type: 'NOTIF_SEEN',
                notifseen
            })
        },
        updateReducer: updated => {
            dispatch({
                type: 'UPDATE_NOTIF',
                updated
            })
        }
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
