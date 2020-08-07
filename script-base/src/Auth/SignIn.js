import React, { useState /*, useEffect */} from 'react'
import { Link } from 'react-router-dom'

const SignIn = (props) => {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.history.push('/prescriptions')
   
  }

  console.log(props);
  return (
    <div>
      <h4>Sign In!</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button typ='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;