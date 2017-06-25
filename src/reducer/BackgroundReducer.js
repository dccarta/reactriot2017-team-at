const initialState = {
    selectedBackground: 'cyber'
}

export default (state = initialState, action = {}) => {
    switch (action.type){
        case 'SET_SELECTED_BACKGROUND':
            return Object.assign({}, state, {selectedBackground: action.value})
        default:
            return state
    }
 
}