import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/prescriptions'>MyScripts</Link>
            <Link to='/healthcare-info'>Healthcare News</Link>
            <Link to='/covid-info'>Covid News</Link>
            {/* <Link to='/auth'>Login</Link> */}
        </div>
    )
}

export default NavBar
