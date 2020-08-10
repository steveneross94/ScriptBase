import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)
    const dispatch = useDispatch()

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div key={i} className='myScript item'>
                    <div>
                        {allScripts[item].name} - {allScripts[item].price}
                    </div>
                    <button onClick={() => dispatch(removeScript(allScripts[item].id))}>Remove</button>
                </div>
            )
            }
        </div>
    )
}

export default MyScript