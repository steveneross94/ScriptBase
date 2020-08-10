import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { loginUser, addScript } from '../actionCreators/actionCreators'

const SignIn = (props) => {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(r => r.json())
      .then(user => {
        if (user.errors) {
        alert(user.errors)
      } else {
        loginUser(user)
        fetchUserScripts(user)
        props.history.push('/prescriptions')
      }
    })
  }

  const fetchUserScripts = (user) => {
    fetch('http://localhost:3000/api/v1/users/'+`${user.id}`)
    .then(r => r.json())
    .then(user => {
      user.prescriptions.forEach(script => dispatch(addScript(script.brand_name)))
    })
  }

  return (
    <div>
      <h4>Sign In!</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button typ='submit'>Submit</button>
      </form>
    </div>
  );
}



export default SignIn