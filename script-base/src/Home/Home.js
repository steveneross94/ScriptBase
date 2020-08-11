import React, { useState } from 'react'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'



function Home(props) {

   let [logIn, setLogIn] = useState(false)
   let [signUp, setSignUp] = useState(false)



    return (
        <div>
            <button onClick={()=>setLogIn(!logIn)}>Login</button><button onClick={()=>setSignUp(!signUp)}>Sign Up</button>
            {logIn && <SignIn {...props}/>}
            {signUp && <SignUp {...props}/>}
        </div>
    )
}


export default Home;