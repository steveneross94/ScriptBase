import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

function BrandName({ props,brandName }) {

    let [isGeneric, setIsGeneric] = useState(false)
    let [isAlternative, setIsAlternative] = useState(false)

    return (
        <div>
            <Col className='brand name item' key={brandName.id}>
                <div>
                    {brandName.name}
                    <p>{brandName.description}</p>
                    <p>{brandName.price}</p>
                    {brandName.generic_option && <button onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option</button>}
                    {brandName.alternative_option && <button onClick={() => setIsAlternative(!isAlternative)}>Show Alternative Option</button>}
                </div>
                {isGeneric &&
                    <div>
                        {brandName.generics.map(generic =>
                            <div key={generic.id}>
                                {generic.name}
                            </div>
                        )}
                    </div>
                }
                {isAlternative &&
                    <div>
                        {brandName.alternatives.map(alternative =>
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
