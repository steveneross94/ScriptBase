import React, { useState, useEffect } from 'react'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import { useDispatch } from 'react-redux'
import { getCovidData } from '../actionCreators/actionCreators'


function Home(props) {

    let [logIn, setLogIn] = useState(false)
    let [signUp, setSignUp] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(r => r.json())
            .then(data => 
                dispatch(getCovidData(data)))
    }, [])


    return (
        <div className='homepage'>
            <h1>Homepage!</h1>
            <button onClick={() => setLogIn(!logIn)}>Login</button><button onClick={() => setSignUp(!signUp)}>Sign Up</button>
            {logIn && <SignIn {...props} />}
            {signUp && <SignUp {...props} />}
        </div>
    )
}


export default Home;