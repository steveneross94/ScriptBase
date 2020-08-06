import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import BrandName from './BrandName'

function BrandNames() {

    let [brandNames, setBrandNames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/brand_names')
            .then(r => r.json())
            .then(data => setBrandNames(data))
    }, [])

    return (
        <div>
            <h1>Brand Name Drug Info!</h1>
                <Row className='brand name container'>
                    {brandNames.map(brandName =>
                        <BrandName  key={brandName.id} brandName={brandName}/>
                    )}
                </Row>
        </div>

    )
}


export default BrandNames
