import React, { useState, useEffect } from 'react'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import Term from '../Term/Term'


function Home(props) {

    let [healthCareTerms, setHealthCareTerms] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/terms')
            .then(r => r.json())
            .then(data => {
                setHealthCareTerms(data)
            })
    }, [])

    return (
        <>
            <div className='homepage'>
                <div className='auth-container'>
                    <div className='auth-block'>
                        <SignIn {...props} />
                        <SignUp {...props} />
                    </div>
                </div>
                <Term terms={healthCareTerms} />
            </div>
            <div className='background'></div>
        </>
    )
}


export default Home