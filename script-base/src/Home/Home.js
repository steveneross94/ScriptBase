import React from 'react'
// import * as act from '../actionCreators/actionCreators'
import { connect } from 'react-redux'

function Home(props) {
    console.log(props);
    return (
        <div>
            <h1>Homepage! for user {props.userId}</h1>
        </div>
    )
}

const msp = state => {
    return {
        userId: state.userId
    }
}


export default connect(msp)(Home);