const BuyerReducer = ( state = [], action) => {
    switch(action.type){
        case 'NEW_USER':
            return (
                [...state, action.payload]
            )
        case 'UPDATE_USERS':
            return (
                state = action.updated
            )
        case 'EDIT_BUYER':
            return (
                state= action.buyerInfos
            )
        default:
            return state
}
}

export default BuyerReducer;