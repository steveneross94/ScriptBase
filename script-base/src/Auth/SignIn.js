import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser, addScript } from '../actionCreators/actionCreators'
import { Form, Button } from 'react-bootstrap'

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
        dispatch(loginUser(user))
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
    <div className='sign-in'>
      <div>Welcome Back</div>
      <Form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <Form.Control name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
        <Form.Control type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
        <Button variant='dark' type='submit'>Sign In</Button>
      </Form>
    </div>
  );
}



export default SignIn