import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addScript } from '../actionCreators/actionCreators'

function BrandName({ brand }) {

    let [isGeneric, setIsGeneric] = useState(false)
    let [isAlternative, setIsAlternative] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const myScript = useSelector(state => state.myScripts[brand.id])
    const addToMyScripts = (brand) => {
        if (user) {
            dispatch(addScript(brand))
            fetch('http://localhost:3000/api/v1/prescriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: user.id,
                    brand_name_id: brand.id
                })
            })
        } else {
            alert('MUST BE LOGGED IN')
        }
    }

    return (
        <div>
            <Col className='brand name item' key={brand.id}>
                <div>
                    <div>Prescription Name: {brand.name}</div>
                    <div>Description: {brand.description}</div>
                    <div>Average Cost per Prescription: ${brand.price}</div>
                    <button disabled={!brand.generic_option} onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option</button>
                    <button disabled={!brand.alternative_option} onClick={() => setIsAlternative(!isAlternative)}>Show Alternative Option</button>
                    <button disabled={myScript} onClick={() => addToMyScripts(brand)}>Add to MyScripts</button>
                </div>
                {isGeneric &&
                    <div>
                        {brand.generics.map(generic =>
                            <div>
                                <div key={generic.id}>
                                    Generic Name: {generic.name}
                                </div>
                                <div>
                                    Average Generic Cost: ${generic.price}
                                </div>
                            </div>
                        )}
                    </div>
                }
                {isAlternative &&
                    <div>
                        {brand.alternatives.map(alternative =>
                            <div>
                                <div key={alternative.id}>
                                    Alternative Option: {alternative.name}
                                </div>
                                <div>
                                    Average Alternative Cost: ${alternative.price}
                                </div>
                            </div>
                        )}
                    </div>
                }
            </Col>
        </div>
    )
}

export default BrandName
