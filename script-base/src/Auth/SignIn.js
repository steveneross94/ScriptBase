import React, { useState /*, useEffect */} from 'react'
import { connect } from 'react-redux'
import * as action from '../actionCreators/actionCreators'

const SignIn = (props) => {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

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
        props.loginUser(user)
        props.history.push('/prescriptions')
      }
    })
  }

  console.log(props);
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

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch(action.loginUser(user))
  }
}

export default connect(null,mdp)(SignIn);