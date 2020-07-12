let initialState = [

]

const reducerReqWaiting = ( state = initialState, action) => {
    switch(action.type){
        case 'CREATE_REQ':
            return (
                [...state, action.payload]
            )
        case 'UPDATE_TO_ANSWERED':
            return (
                state.map(el => el.quotationNUM === action.quotreq.quotationNUM ? action.quotreq : el)
            )
        case 'DENY_QUOT':
            return (
                state.map(el => el.quotationNUM === action.quotResponse.quotationNUM ? action.quotResponse : el)
            )
        case 'ACCEPT_QUOT':
            return (
                state.map(el => el.quotationNUM === action.quotResponse.quotationNUM ? action.quotResponse : el)
            )
        case 'UPDATE_TABS':
            return (
                state=action.updated
            )  
        default:
            return state
}
}

export default reducerReqWaiting;