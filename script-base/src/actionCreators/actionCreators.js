let loginUser = (user) => ({type: 'LOGIN', payload: {user}})
let addScript = (script) => ({type: 'ADD_SCRIPT', payload: {script}})


export {
    loginUser,
    addScript
}