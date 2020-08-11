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
        if (user){
            dispatch(addScript(brand))
            fetch('http://localhost:3000/api/v1/prescriptions',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    user_id: user.id,
                    brand_name_id: brand.id,
                    price: brand.price
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
                    {brand.name}
                    <p>{brand.description}</p>
                    <p>{brand.price}</p>
                    {brand.generic_option && <button onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option</button>}
                    {brand.alternative_option && <button onClick={() => setIsAlternative(!isAlternative)}>Show Alternative Option</button>}
                    <button disabled={myScript} onClick={() => addToMyScripts(brand)}>Add to MyScripts</button>
                </div>
                {isGeneric &&
                    <div>
                        {brand.generics.map(generic =>
                            <div key={generic.id}>
                                {generic.name} - {generic.price}
                            </div>
                        )}
                    </div>
                }
                {isAlternative &&
                    <div>
                        {brand.alternatives.map(alternative =>
                            <div key={alternative.id}>
                                {alternative.name} - {alternative.price}
                            </div>
                        )}
                    </div>
                }
            </Col>
        </div>
    )
}

export default BrandName
