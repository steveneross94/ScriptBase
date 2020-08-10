import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)
    const dispatch = useDispatch()

    const removeScriptFromDb = (script) => {
        console.log(script);
        // dispatch(removeScript(script))
        // fetch('http://localhost:3000/api/v1/prescriptions'+`/${script}`, { method: 'DELETE' })
    }

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div key={i} className='myScript item'>
                    <div>
                        {allScripts[item].name} - {allScripts[item].price}
                    </div>
                    <button onClick={() => removeScriptFromDb(allScripts[item].id)}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default MyScript