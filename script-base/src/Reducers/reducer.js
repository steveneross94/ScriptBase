const initialState = {
    user: null,
    myScripts: [],
    covidData: [],
    countryData: []
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
        case 'GET_GLOBAL_DATA':
            return {
                ...prevState, covidData: action.payload.data
            }
        case 'GET_COUNTRY_DATA':
            return {
                ...prevState, countryData: action.payload.data
            }
        default:
            return prevState
    }
}

export default reducer 