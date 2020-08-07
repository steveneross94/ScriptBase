const initialState = {
    user: null,
    myScripts: []
}   

const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...prevState, user: action.payload.value};
        case 'ADD_SCRIPT':
            return {...prevState, myScripts: action.payload}
        default:
            return prevState
    }
}

export default reducer 