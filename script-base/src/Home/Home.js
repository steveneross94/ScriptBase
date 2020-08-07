import React, { useState /*, useEffect */} from 'react'
// import * as act from '../actionCreators/actionCreators'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'


function Home(props) {

   let [logIn, setLogIn] = useState(false)
   let [signUp, setSignUp] = useState(false)


    console.log(props);
    return (
        <div>
            <h1>Homepage!</h1>
            <button onClick={()=>setLogIn(!logIn)}>Login</button><button onClick={()=>setSignUp(!signUp)}>Sign Up</button>
            {logIn && <SignIn {...props}/>}
            {signUp && <SignUp {...props}/>}
        </div>
    )
}




export default (Home);