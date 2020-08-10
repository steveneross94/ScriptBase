let loginUser = (user) => ({type: 'LOGIN', payload: {user}})
let addScript = (script) => ({type: 'ADD_SCRIPT', payload: {script}})
let removeScript = (scriptId) => ({type: 'REMOVE_SCRIPT', payload: {scriptId}})

export {
    loginUser,
    addScript,
    removeScript
}