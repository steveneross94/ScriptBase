import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

function BrandName() {

    let [brandNames, setBrandNames] = useState([])
    // let [toggleGeneric, setToggleGeneric] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/brand_names')
            .then(r => r.json())
            .then(data => setBrandNames(data))
    }, [])

    const showGeneric = (brandName) => {
        // setToggleGeneric(prevToggleGeneric => !prevToggleGeneric)
        console.log(brandName[0].name);
        return (
            <div>
                {brandName[0].name}
            </div>
        )
    }
    // console.log(toggleGeneric);
    return (
        <div>
            <h1>Brand Name Drug Info!</h1>
                <Row className='brand name container'>
                    {brandNames.map(brandName =>
                        <Col className='brand name item' key={brandName.id}>
                            <div>
                                {brandName.name}
                                <p>{brandName.description}</p>
                                <p>{brandName.price}</p>
                                {brandName.generic_option === true ? <button onClick={() => showGeneric(brandName.generics)}>Show Generic Option Details</button> : null}
                                {brandName.alternative_option === true ? <button>Show Alternative Option Details</button> : null}
                            </div>
                            {/* {toggleGeneric ? 
                                <div>
                                    {brandName.generics.name}
                                </div>
                                :
                                null
                            } */}
                        </Col>
                    )}
                </Row>
        </div>

    )
}


export default BrandName
