import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as action from '../actionCreators/actionCreators'

const SignUp = (props) => {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ username, password })
      })
        .then(r => r.json())
        .then(res => {
          if (res.errors) {
            alert(res.errors)
          } else {
            props.loginUser(res)
            props.history.push('/prescriptions')
          }
        })
    } else {
      alert('PASSWORDS DO NOT MATCH')
    }
  }

  return (
    <div>
      <h4>Sign Up!</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='password' name='confirmPassword' placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(null, mdp)(SignUp);