import React from 'react'
import { useSelector } from 'react-redux'

function MyScript() {

    const allScripts = useSelector(state => state.myScripts)

    return (
        <div className='myScript container'>
            {Object.keys(allScripts).map((item, i) =>
                <div className='myScript item'>
                    <div key={i}>
                        {allScripts[item].name} - {allScripts[item].price}
                    </div>
                    <button onClick={() => Object.keys(allScripts).filter(script => script.id !== allScripts.id)}>Remove</button>
                </div>
            )
            }
        </div>
    )
}

export default MyScript
