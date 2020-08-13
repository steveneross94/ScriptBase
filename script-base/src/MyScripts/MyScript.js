import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const removeScriptFromDb = (script) => {
        dispatch(removeScript(script))
        fetch('http://localhost:3000/api/v1/users' + `/${user.id}`)
            .then(r => r.json())
            .then(res => {
                let myScriptArray = res.prescriptions
                let scriptToRemove = myScriptArray.find(prescription => prescription.brand_name_id === script)
                fetch('http://localhost:3000/api/v1/prescriptions/' + `${scriptToRemove.id}`, { method: 'DELETE' })
            })
    }

    let myScriptsPrices = Object.keys(allScripts).map(item => (parseInt(allScripts[item].price)))

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div key={i} className='myScript item'>
                    <div>
                        {allScripts[item].name} - Price: {allScripts[item].price}
                        <button onClick={() => removeScriptFromDb(allScripts[item].id)}>Remove</button>
                    </div>
                </div>
            )}
            {myScriptsPrices &&
                <div>
                    Total Monthly Prescription Cost Without Insurance: {myScriptsPrices.reduce(function(a, b){return(a + b)},0) === 0 ? null : myScriptsPrices.reduce(function(a, b){return(a + b)},0)}
                </div>}
        </div>
    )
}

export default MyScript