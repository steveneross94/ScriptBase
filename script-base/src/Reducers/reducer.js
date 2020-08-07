const initialState = {
    userId: ''
}   

const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...prevState, userId: action.payload.value};
        default:
            return prevState
    }
}

export default reducer 