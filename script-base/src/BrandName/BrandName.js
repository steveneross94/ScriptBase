import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

function BrandName({ brandName }) {

    let [isGeneric, setIsGeneric] = useState(false)

    return (
        <div>
            <Col className='brand name item' key={brandName.id}>
                <div>
                    {brandName.name}
                    <p>{brandName.description}</p>
                    <p>{brandName.price}</p>
                    {brandName.generic_option && <button onClick={() => setIsGeneric(!isGeneric)}>Show Generic Option Details</button>}
                    {brandName.alternative_option && <button>Show Alternative Option Details</button>}
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
            </Col>
        </div>
    )
}

export default BrandName
