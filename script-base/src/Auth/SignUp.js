import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as action from '../actionCreators/actionCreators'
import { Form, Button } from 'react-bootstrap'

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
    <div className='sign-up'>
      <div>Create an Account</div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Control name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
        <Form.Control type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        <Form.Control type='password' name='confirmPassword' placeholder='confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br></br>
        <Button variant='dark' type='submit'>Sign Up</Button>
      </Form>
    </div>
  );
}

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(null, mdp)(SignUp);