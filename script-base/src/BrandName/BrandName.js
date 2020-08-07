import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addScript } from '../actionCreators/actionCreators'

function BrandName({ props, myScripts, brand }) {

    let [isGeneric, setIsGeneric] = useState(false)
    let [isAlternative, setIsAlternative] = useState(false)



    return (
        <div>
            <Col className='brand name item' key={brand.id}>
                <div>
                    {brand.name}
                    <p>{brand.description}</p>
                    <p>{brand.price}</p>
                    {brand.generic_option && <button onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option</button>}
                    {brand.alternative_option && <button onClick={() => setIsAlternative(!isAlternative)}>Show Alternative Option</button>}
                    {brand && <button onClick={(brand) => addScript(brand)}>Add to MyScripts</button>}
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

// const mdp = dispatch => {
//     return {
//         addScript: (brandName) => dispatch(addScript(brandName))
//     }
// }

const msp = state => {
    return {
        myScripts: state.myScripts
    }
}



export default connect(msp, {addScript})(BrandName)
