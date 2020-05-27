const initialState=[
    {
        quotationNUM: "1235",
        content: 'Someone is Looking for ',
        time:new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
        description: 'iPhone',
        status: 'Waiting',
        type: 'new',
        seen: 'no'
    },
    // {
    //     id: Math.round(Math.random()*100),
    //     content: 'New Request Received ',
    //     time: new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
    //     user: 'Moez',
    //     type: 'new',
    //     seen: 'no'
    // },
]
const NotifReducer = (state = initialState, action) => {
    switch(action.type){
        case 'NEW_NOTIF':
            return [...state, action.newnotif]
        case 'ANSWERED_NOTIF':
            // return [...state, action.answerednotif]
            return state.map(el => el.quotationNUM === action.answerednotif.quotationNUM ? action.answerednotif : el)
        case 'ACCEPTED_NOTIF':
            // return [...state, action.acceptednotif]
            return state.map(el => el.quotationNUM === action.acceptednotif.quotationNUM ? action.acceptednotif : el)
            // return [...state, action.notifseen]
        case 'NOTIF_SEEN':
            return (
                state.map(el => el.quotationNUM === action.notifseen.quotationNUM ? action.notifseen : el)
            )
        case 'UPDATE_NOTIF':
            return (
                state=action.updated
            )  
        default:
            return state
    }
}

export default NotifReducer