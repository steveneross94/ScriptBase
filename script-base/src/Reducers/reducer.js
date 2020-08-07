const initialState = {
    user: null
}   

const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...prevState, user: action.payload.value};
        default:
            return prevState
    }
}

export default reducer 