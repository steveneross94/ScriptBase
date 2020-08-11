import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import EditForm from '../EditForm/EditForm'
import { removeScript } from '../actionCreators/actionCreators'



function UserScript({ allScripts, userScripts}) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    let [toggleEdit, setToggleEdit] = useState(false)

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


    return (
        <div>
            <div className='myScript item'>
                <div>
                    Name: {allScripts.name} - Price: {userScripts ? userScripts.map(script => script.price) : null}
                </div>
                <button onClick={() => removeScriptFromDb(allScripts.id)}>Remove</button>
                <button onClick={() => setToggleEdit(!toggleEdit)}>Edit Your Price</button>
                {toggleEdit &&
                        <EditForm editScript={allScripts}/>
                    }

            </div>
        </div>
    )
}

export default UserScript
