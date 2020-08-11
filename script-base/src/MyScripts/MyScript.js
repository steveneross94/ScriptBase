import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeScript } from '../actionCreators/actionCreators'
import EditForm from '../EditForm/EditForm'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    let [toggleEdit, setToggleEdit] = useState(false)
    let [userScripts, setUserScripts] = useState(null)

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

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/users/'+`${user.id}`)
            .then(r => r.json())
            .then(data => setUserScripts(data.prescriptions))
    }, [])

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div key={i} className='myScript item'>
                    <div>
                        Name: {allScripts[item].name} - Price: {allScripts[item].price}
                    </div>
                    <button onClick={() => removeScriptFromDb(allScripts[item].id)}>Remove</button>
                    <button onClick={() => setToggleEdit(!toggleEdit)}>Edit Your Price</button>
                    {toggleEdit && 
                        <EditForm />
                    }
                </div>
            )}
        </div>
    )
}

export default MyScript