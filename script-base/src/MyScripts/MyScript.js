import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const removeScriptFromDb = (script) => {
        dispatch(removeScript(script))
        fetch('http://localhost:3000/api/v1/users'+`/${user.id}`)
        .then(r => r.json())
        .then(res => {
            let myScriptArray = res.prescriptions
            let scriptToRemove = myScriptArray.find(prescription => prescription.brand_name_id === script) 
            fetch('http://localhost:3000/api/v1/prescriptions/'+`${scriptToRemove.id}`, {method: 'DELETE'})
        })
    }

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div key={i} className='myScript item'>
                    <div>
                        {allScripts[item].name}
                    <button onClick={() => removeScriptFromDb(allScripts[item].id)}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyScript