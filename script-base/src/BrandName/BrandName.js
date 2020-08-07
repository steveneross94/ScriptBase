import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addScript } from '../actionCreators/actionCreators'

function BrandName({ brand }) {

    let [isGeneric, setIsGeneric] = useState(false)
    let [isAlternative, setIsAlternative] = useState(false)

    const dispatch = useDispatch()
    
    const myScript = useSelector(state => state.myScripts[brand.id])
    const allScripts = useSelector(state => state.myScripts)

    // const addScriptSafely = brand => {
    //     if (!myScript){
    //         dispatch(addScript(brand))
    //     } else {
    //         alert('script already added')
    //     }
    // }

    console.log(myScript, allScripts, brand.id);

    return (
        <div>
            <Col className='brand name item' key={brand.id}>
                <div>
                    {brand.name}
                    <p>{brand.description}</p>
                    <p>{brand.price}</p>
                    {brand.generic_option && <button onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option</button>}
                    {brand.alternative_option && <button onClick={() => setIsAlternative(!isAlternative)}>Show Alternative Option</button>}
                    <button disabled={myScript} onClick={() => dispatch(addScript(brand))}>Add to MyScripts</button>
                </div>
                {isGeneric &&
                    <div>
                        {brand.generics.map(generic =>
                            <div key={generic.id}>
                                {generic.name}
                            </div>
                        )}
                    </div>
                }
                {isAlternative &&
                    <div>
                        {brand.alternatives.map(alternative =>
                            <div key={alternative.id}>
                                {alternative.name}
                            </div>
                        )}
                    </div>
                }
            </Col>
        </div>
    )
}

export default BrandName
