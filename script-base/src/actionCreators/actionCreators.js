let loginUser = (user) => ({type: 'LOGIN', payload: {user}})
let addScript = (script) => ({type: 'ADD_SCRIPT', payload: {script}})
let removeScript = (scriptId) => ({type: 'REMOVE_SCRIPT', payload: {scriptId}})
let getCovidData = (data) => ({type: 'GET_GLOBAL_DATA', payload: {data}})
let getCountryData = (data) => ({type: 'GET_COUNTRY_DATA', payload: {data}})

export {
    loginUser,
    addScript,
    removeScript,
    getCovidData,
    getCountryData
}