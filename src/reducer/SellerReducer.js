const SellerReducer = ( state = [], action) => {
    switch(action.type){
        case 'NEW_SELLER':
            return (
                [...state, action.payload]
            )
        case 'UPDATE_SELLERS':
            return (
                state = action.updated
            )
        case 'EDIT_SELLER':
            return (
                state.map(el => el._id === action.sellerInfos._id ? action.sellerInfos : el)
        )
        default:
            return state
}
}

export default SellerReducer;