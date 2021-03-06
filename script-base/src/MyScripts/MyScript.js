import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'
import { Button } from 'react-bootstrap'

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
        <div>
            <div className='myScript container'>
                <strong>My Current Prescriptions</strong>
                {Object.keys(allScripts).map((item, i) =>
                    <div key={i} className='myScript item'>
                        <div className='userScript'>
                            {allScripts[item].name} - Price: ${allScripts[item].price}
                            <Button variant='dark' size='sm' onClick={() => removeScriptFromDb(allScripts[item].id)}>Remove</Button>
                        </div>
                    </div>
                )}
                {Object.keys(allScripts).length > 0 ? null : 'You Can Keep Track of Your Prescriptions Here'}
            </div>
            {myScriptsPrices &&
                <div>
                    Total Monthly Prescription Cost Without Insurance: $<strong>{myScriptsPrices.reduce(function (a, b) { return (a + b) }, 0) === 0 ? null : myScriptsPrices.reduce(function (a, b) { return (a + b) }, 0)}</strong>
                </div>}
        </div>
    )
}

export default MyScript