const numberReducer = (state, action) =>{
    switch (action.type) {

        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1

        case 'INCREMENT_10':
            return state + action.val
        case 'DECREMENT_10':
            return state - action.val
            
        default:

    }
}
export default numberReducer;