const initialState = {
    user: null,
    myScripts: []
}   

const reducer = (prevState=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...prevState, user: action.payload.user};
        case 'ADD_SCRIPT':
            return {
                ...prevState, 
                myScripts: {
                    ...prevState.myScripts,
                    [action.payload.script.id]: action.payload.script
                }
            }
        case 'REMOVE_SCRIPT':
            delete prevState.myScripts[action.payload.scriptId]
            return {
                ...prevState,
                myScripts: {
                    ...prevState.myScripts
                }
            }
        default:
            return prevState
    }
}

export default reducer 