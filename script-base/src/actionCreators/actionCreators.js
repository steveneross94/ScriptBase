let loginUser = (user) => ({type: 'LOGIN', payload: {value: user}})
let addScript = (e) => ({type: 'ADD_SCRIPT', payload: e.target.value})


export {
    loginUser,
    addScript
}